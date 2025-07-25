package handlers

import (
	"database/sql"
	"encoding/json"
	"flashquiz-server/internal/database"
	"flashquiz-server/internal/models"
	"flashquiz-server/internal/service"
	"log"
	"net/http"
	"time"
)

func Register(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	if r.Method != "POST" {
		ErrorResponse(w, http.StatusMethodNotAllowed, "Method Not Allowed")
		return
	}

	u := &models.User{}
	err := json.NewDecoder(r.Body).Decode(&u)
	if err != nil {
		ErrorResponse(w, http.StatusBadRequest, "Invalid JSON Format")
		return
	}

	err = u.Validate()
	if err != nil {
		ErrorResponse(w, http.StatusBadRequest, err.Error())
		return
	}

	var userExists bool
	if err := database.DB.QueryRow("SELECT EXISTS (SELECT 1 FROM users WHERE email = $1)", u.Email).Scan(&userExists); err != nil {
		ErrorResponse(w, http.StatusInternalServerError, "Internal Server Error")
		return
	}

	if userExists {
		ErrorResponse(w, http.StatusConflict, "User already exists, Try logging in")
		return
	}

	hashedPassword, err := Hash(u.Password)
	if err != nil {
		ErrorResponse(w, http.StatusInternalServerError, "Internal Server Error")
		return
	}

	var userId string

	//create a row in the users table
	err = database.DB.QueryRow("INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING user_id", u.Name, u.Email, hashedPassword).Scan(&userId)
	if err != nil {
		ErrorResponse(w, http.StatusInternalServerError, "Internal Server Error")
		return
	}

	//create a row in the records table
	if _, err := database.DB.Exec("INSERT INTO records (user_id, quiz_completed, avg_score, rank, points) VALUES ($1, $2, $3, $4, $5)", userId, 0, 0, "Noob", 0); err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		ErrorResponse(w, http.StatusInternalServerError, "Internal Server Error")
		return
	}

	token, err := service.GenerateToken()
	if err != nil {
		log.Fatal(err)
	}

	_, err = database.DB.Exec("INSERT INTO tokens (user_id, token, expires_at) VALUES ($1, $2, $3)", userId, token, time.Now().Add(24*time.Hour))
	if err != nil {
		ErrorResponse(w, http.StatusInternalServerError, "Internal Server Error")
		return
	}

	go service.SendVerification(u.Email, u.Name, token)
	service.JsonResponse(w, http.StatusCreated, "Account Created")
}

func Login(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	if r.Method != "POST" {
		ErrorResponse(w, http.StatusMethodNotAllowed, "Method Not Allowed")
		return
	}

	u := &models.User{}
	err := json.NewDecoder(r.Body).Decode(&u)
	if err != nil {
		ErrorResponse(w, http.StatusBadRequest, "Invalid JSON Format")
		return
	}

	if err := u.LoginValidate(); err != nil {
		ErrorResponse(w, http.StatusBadRequest, err.Error())
		return
	}

	var user models.User
	if err := database.DB.QueryRow("SELECT user_id, password FROM users WHERE email = $1", u.Email).Scan(&user.UserId, &user.Password); err != nil {
		if err == sql.ErrNoRows {
			ErrorResponse(w, http.StatusNotFound, "User Not Found")
			return
		}
		ErrorResponse(w, http.StatusInternalServerError, "Internal Server Error")
		return
	}

	err = service.Verify(user.Password, u.Password)
	if err != nil {
		ErrorResponse(w, http.StatusUnauthorized, "Invalid Crendentials")
		return
	}

	token, err := service.GenerateJWT(user.UserId)
	if err != nil {
		ErrorResponse(w, http.StatusInternalServerError, "Internal Server Error")
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"token": token, "message": "Login Successful"})
}

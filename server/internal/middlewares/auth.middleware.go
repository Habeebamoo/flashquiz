package middlewares

import (
	"context"
	"fmt"
	"net/http"
	"strings"
	"os"

	"github.com/golang-jwt/jwt/v5"
)

type contextKey string
var UserIdKey contextKey = "userID"

func AuthMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request){
		if r.URL.Path == "/api/auth/login" || r.URL.Path == "/api/auth/register" || r.URL.Path == "/api/user/verify" || r.URL.Path == "/api/user/forgot-password" || r.URL.Path == "/api/user/reset-password" || r.URL.Path == "/api" {
			next.ServeHTTP(w, r)
			return
		}

		authHeader := r.Header.Get("Authorization")
		if authHeader == "" {
			http.Error(w, "Authorization Header Missing", http.StatusUnauthorized)
			return
		}

		if !strings.HasPrefix(authHeader, "Bearer ") {
			http.Error(w, "Invalid Authoriation Format", http.StatusUnauthorized)
			return
		}

		tokenStrings := strings.TrimPrefix(authHeader, "Bearer")
		tokenStr := strings.TrimSpace(tokenStrings)

		token, err := jwt.Parse(tokenStr, func(token *jwt.Token) (interface{}, error) {
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, fmt.Errorf("unexpected signing method %v", token.Header["alg"])
			}
			return []byte(os.Getenv("JWT_KEY")), nil
		})

		if err != nil || !token.Valid {
			http.Error(w, "Invalid Token", http.StatusUnauthorized)
			return
		}

		claims, ok := token.Claims.(jwt.MapClaims)
		if !ok {
			http.Error(w, "Cannot verify token", http.StatusUnauthorized)
			return
		}

		userId, ok := claims["userId"].(string)
		if !ok {
			http.Error(w, "Invalid user id in token", http.StatusUnauthorized)
			return
		}

		ctx := context.WithValue(r.Context(), UserIdKey, userId)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

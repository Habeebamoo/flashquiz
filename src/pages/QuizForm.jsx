import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { ACTIONS, UserContext } from "../context/UserContext";
import { getUrl } from "../utils/url";

export default function QuizForm() {
  const { dispatch } = useContext(UserContext);
  const [form, setForm] = useState({
    username: "",
    category: "Science",
    difficulty: "medium",
    questionNumber: "10",
    type: "boolean",
    minutes: "0.5",
  });
  const user = JSON.parse(localStorage.getItem("user-cred"))

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const confirm = window.confirm("Are you ready to begin");
    if(!confirm) return;
    
    dispatch({
      type: ACTIONS.SAVE_CREDENTIALS,
      payload: form
    })

    fetchQuiz();
    navigate("/quiz-page")
  }

  const url = getUrl(form);

  const fetchQuiz = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      localStorage.setItem("quiz", JSON.stringify(data.results));
    } catch(err) {
      console.log("This is Error", err)
    }
  }

  return (
    <main className="quiz-form-container">
      <form onSubmit={submitForm}>
        <h2>Choose Your Preference</h2>
        <div className="label-container">
          <label htmlFor="name">Full Name</label>
          <input
            value={form.username}
            onChange={(e) => {
              setForm(prev => ({...prev, username: e.target.value}))
            }}
            required
          />
        </div>     
        <div className="label-container">
          <label htmlFor="category">Category</label>
          <select 
            id="category"
            value={form.category}
            onChange={(e) => {
              setForm(prev => ({...prev, category: e.target.value}))
            }}
          >
            <option value="Science">Science</option>
            <option value="Arts">Arts</option>
            <option value="History">History</option>
            <option value="Tech">Tech</option>
            <option value="Sports">Sports</option>
            <option value="Anime">Anime & Manga</option>
            <option value="Mythology">Mythology</option>
          </select>
        </div>
        <div className="label-container">
          <label htmlFor="difficulty">Difficulty</label>
          <select 
            id="difficulty"
            value={form.difficulty}
            onChange={(e) => {
              setForm(prev => ({...prev, difficulty: e.target.value}))
            }}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="label-container">
          <label htmlFor="type">Option Format</label>
          <select 
            id="type"
            value={form.type}
            onChange={(e) => {
              setForm(prev => ({...prev, type: e.target.value}))
            }}
          >
            <option value="boolean">True or False</option>
            <option value="multiple">Multiple</option>
          </select>
        </div>
        <div className="label-container">
          <label htmlFor="questionNumber">No. of Questions</label>
          <input 
            type="number" 
            id="questionNumber"
            min={10}
            max={50} 
            value={form.questionNumber}
            onChange={(e) => {
              setForm(prev => ({...prev, questionNumber: e.target.value}))
            }}
          />
        </div>
        <div className="label-container">
          <label htmlFor="minutes">Time</label>
          <select 
            id="minutes"
            value={form.minutes}
            onChange={(e) => {
              setForm(prev => ({...prev, minutes: e.target.value}))
            }}
          >
            <option value="0.5">30 Seconds</option>
            <option value="1">60 Seconds</option>
            <option value="2">2 Minutes</option>
            <option value="5">5 Minutes</option>
            <option value="10">10 Minutes</option>
            <option value="20">20 Minutes</option>
          </select>
        </div>
        <button>Start Quiz</button>
      </form>
    </main>
  )
}

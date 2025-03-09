import { useState, useContext } from "react"
import { ACTIONS, UserContext } from "../context/UserContext";

export default function QuizForm() {
  const { dispatch } = useContext(UserContext);
  const [form, setForm] = useState({
    username: "",
    gender: "Female",
    category: "Science",
    difficulty: "Medium",
    questionNumber: "10",
    optionFormat: "trueOrFalse"
  });

  const submitForm = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.SAVE_CREDENTIALS,
      payload: form
    })
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
          />
        </div>     
        <div className="label-container">
          <label htmlFor="gender">Gender</label>
          <select 
            id="gender"
            value={form.gender}
            onChange={(e) => {
              setForm(prev => ({...prev, gender: e.target.value}))
            }}
          >
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
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
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
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
          <label htmlFor="optionFormat">Option Type</label>
          <select 
            id="optionFormat"
            value={form.optionFormat}
            onChange={(e) => {
              setForm(prev => ({...prev, optionFormat: e.target.value}))
            }}
          >
            <option value="trueOrFalse">True or False</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    </main>
  )
}

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { progressColor, getResult } from "../utils/progress.js";
import { getCategoryImg } from "../utils/categoryImg.js";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"

export default function EndPage() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user-cred')));
  const [progress, setProgress] = useState(0);

  const navigate = useNavigate();

  const score = JSON.parse(localStorage.getItem("quizScore"));
  const noOfQuestions = user.questionNumber;

  const percentage = JSON.parse(localStorage.getItem("percentage"));
  const color = progressColor(percentage);
  const result = getResult(percentage);
  const categoryImg = getCategoryImg(user)

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      if(start >= percentage) {
        clearInterval(interval)
      }
      setProgress(start)
    }, 10);

    return () => clearInterval(interval)
  }, [percentage]);

  const EndQuiz = () => {
    localStorage.clear();
  }

  return (
    <main className="end-page">
      <section className="progress-container">
        <div className="progress-box">
          <div className="progress-bar">
            <CircularProgressbar
              value={progress}
              text={`${Math.round(progress)}%`}
              styles={buildStyles({
                pathColor: color,
                textColor: color,
                transition: "stroke-dashoffset 0.5s ease-out",
              })}   
            />
          </div>
          <div className="info">
            <h3>Result:<span> {result}</span></h3>
            <h3>Question Passed: <span>{score} of {noOfQuestions}</span></h3>
            <div className="buttons">
              <button
                onClick={() => navigate("/all-answers-page")}
              >
                View all answers
              </button>
              <button onClick={EndQuiz}>End Quiz</button>
            </div>
          </div>
        </div>
        <div className="category-img">
          <h3>Category: {user.category}</h3>
          <img src={categoryImg} />
        </div>
      </section>
      <form action="https://getform.io/f/adrrejpa" method="POST">
        <h2>Feedback</h2>
        <p>We would love a Feedback from you so we can improve on the platform</p>
        <br />
        <div className="form-box">
          <div className="label-container">
            <label htmlForor="username">Username</label>
            <input name="username" id="username" value={user.username} disabled />
          </div>
          <div className="label-container">          
            <label htmlForor="email">E-mail</label>
            <input name="email" id="email" />
          </div>
          <div className="label-container">
            <label htmlForor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="5"></textarea>
          </div>
          <div className="button-area">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </main>
  )
}
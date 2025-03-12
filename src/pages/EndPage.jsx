import { useEffect, useState } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import SciencePng from "../assets/Science.png"

export default function EndPage() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user-cred')));
  const [progress, setProgress] = useState(0);

  const percentage = 90

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
  }, [percentage])

  return (
    <main className="end-page">
      <section className="progress-container">
        <div className="progress-box">
          <div className="progress-bar">
            <CircularProgressbar
              value={progress}
              text={`${Math.round(progress)}%`}
              styles={buildStyles({
                pathColor: "green",
                textColor: "green",
                transition: "stroke-dashoffset 0.5s ease-in-out",
              })}   
            />
          </div>
          <div className="info">
            <h3>Result:<span> Passed</span></h3>
            <h3>Question Passed: <span>13 of 20</span></h3>
            <button>Check all answers</button>
          </div>
        </div>
        <div className="category-img">
          <h3>Category: Science</h3>
          <img src={SciencePng} />
        </div>
      </section>
      <form action="https://getform.io/f/adrrejpa" method="POST">
        <h2>Feedback</h2>
        <p>We would love a Feedback from you so we can improve on the platform</p>
        <br />
        <div className="form-box">
          <div className="label-container">
            <label htmlForor="username">Username</label>
            <input name="username" id="username" value={user.username} />
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
import { useRef, useState } from "react"

export default function EndPage() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user-cred')));

  return (
    <main>
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
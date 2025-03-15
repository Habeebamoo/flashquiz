import { useState } from "react"
import logo from "../assets/logo.png"

export default function Footer() {
  const [email, setEmail] = useState("example@example.com");

  const subscribe = () => {
    fetch("https://getform.io/f/adrrejpa", {
      method: "POST"
    })
  }

  return (
    <footer>
      <div className="img-box">
        <img src={logo} />
      </div>
      <div className="info">
        <h3>Legal</h3>
        <small>Terms of use</small>
        <small>License agreement</small>
        <small>Privacy policy</small>
        <small>Cookies policy</small>
        <small>Copywright information</small>
      </div>
      <div className="info">
        <h3>Support</h3>
        <small>FAQ</small>
        <small>Search guide</small>
        <small>Events</small>
        <small>Subscriptions</small>
      </div>
      <div>
        <h3>Subscribe to our newsletter</h3>
        <form action="https://getform.io/f/adrrejpa" method="POST" className="footer-form">
          <input 
            type="email" 
            name="subscriber-email"
            placeholder="example@gmail.com"
          />
          <button>Subscribe</button>
        </form>
      </div>
    </footer>
  )
}
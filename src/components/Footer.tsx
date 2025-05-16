import { useState } from "react";
import logo from "../assets/logo.png"
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState<string>("")

  const submitForm = () => {
    fetch("https://getform.io/f/adrrejpa", {
      method: "POST",
      body: JSON.stringify(email)
    })
  }

  return (
    <footer className="p-2 bg-accentXlight border-t-1 border-t-accentCold">
      <div className="flex-start mt-3">
        <img src={logo} className="h-[30px]" />
        <h2>FlashQuiz</h2>
      </div>
      <p className="text-secondary text-sm font-open py-2">The ultimate destination for trivia and fun.</p>
      <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3 p-1">
        <div>
          <h3 className="mb-2 font-inter">Legal</h3>
          <small>Terms of use</small>
          <small>License agreement</small>
          <small>Privacy policy</small>
          <small>Cookies policy</small>
          <small>Copywright information</small>
        </div>
        <div>
          <h3 className="mb-2 font-inter">Support</h3>
          <small>FAQ</small>
          <small>Search guide</small>
          <small>Events</small>
          <small>Subscriptions</small>
        </div>
        <div className="">
          <h3 className="text-center mb-3 text-lg font-inter">Subscribe to our newsletter</h3>
          <form className="flex-center px-4 relative p-2">
            <input 
              type="email" 
              name="subscriber-email"
              placeholder="example@gmail.com"
              className="p-2 border-1 border-secondary rounded-full w-full pl-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div onClick={submitForm} className="absolute right-[25px] bg-black rounded-full h-7 w-7 flex-center cursor-pointer">
              <FaArrowUp color="white" />
            </div>
          </form>
        </div>
      </div>
    </footer>
  )
}

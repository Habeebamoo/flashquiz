import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <header className="flex-between bg-white shadow-sm py-2 px-3">
      <div className="flex-start p-1">
        <img src={logo} className="h-[40px]" />
        <h1 className="ml-1">FlashQuiz</h1>
      </div>
      <div>
        <NavLink to={"/login"} className="py-2 px-5 bg-black text-white rounded-md cursor-pointer hover:text-black hover:bg-transparent border-1 border-black">Login</NavLink>
      </div>
    </header>
  )
}

export default Header
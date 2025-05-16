import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"

const Header = ({ button=true }: { button: boolean}) => {
  return (
    <header className="flex-between bg-white shadow-sm py-2 px-3 fixed top-0 left-0 right-0">
      <div className="flex-start p-1">
        <img src={logo} className="h-[40px]" />
        <h1 className="ml-1">FlashQuiz</h1>
      </div>
      {button &&
        <div>
          <NavLink to={"/login"} className="btn-black">Login</NavLink>
        </div>
      }
    </header>
  )
}

export default Header
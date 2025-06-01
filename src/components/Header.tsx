import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"
import { useTheme } from "../context/ThemeContext"

const Header = ({ button=true }: { button: boolean}) => {
  const { theme, setTheme } = useTheme()

  const handleTheme = () => {
    if (theme == "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <header className="flex-between bg-white shadow-sm py-3 px-3 fixed top-0 left-0 right-0">
      <div className="flex-start p-1">
        <img src={logo} className="h-[30px]" />
        <h1 className="ml-1 text-black">FlashQuiz</h1>
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
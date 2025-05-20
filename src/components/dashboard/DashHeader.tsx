import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"
import { useTheme } from "../../context/ThemeContext"
import { FaMoon, FaSun } from "react-icons/fa"

const Header = () => {
  const { theme, setTheme } = useTheme()

  const handleTheme = () => {
    if (theme == "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  const iconTheme = theme === "light" ? "black" : "white";

  return (
    <header className="flex-between bg-white dark:bg-[#333] shadow-sm py-3 px-3 fixed top-0 left-0 right-0">
      <div className="flex-start p-1">
        <img src={logo} className="h-[30px]" />
        <h1 className="ml-1 text-black dark:text-white">FlashQuiz</h1>
      </div>
      <div onClick={handleTheme} className="cursor-pointer">
        {theme == "light" ? <FaMoon color={iconTheme} /> : <FaSun color={iconTheme} />}
      </div>
    </header>
  )
}

export default Header
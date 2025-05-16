import { NavLink } from "react-router-dom"
import logo from "../assets/hero.jpg"

const Hero = () => {
  return (
    <section className="p-4 flex-start md:w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 mt-[60px] sm:mt-[40px]">
      <div>
        <h1 className="text-3xl font-inter mb-2 mt-6">Test Your Knowledge with Interactive Quizzes</h1>
        <p className="mb-2 text-secondary">Challenge yourself with thousands of quizzes across various categories. Learn, compete and have fun</p>
        <div>
          <NavLink to={"/login"} className="btn-white">Start a Quiz</NavLink>
        </div>
      </div>
      <div>
        <img src={logo} className="h-[300px] mx-auto" />
      </div>
    </section>
  )
}

export default Hero
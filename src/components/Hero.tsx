import { NavLink } from "react-router-dom"

const Hero = () => {
  return (
    <section className="p-4 h-[300px] flex-start md:w-[90%] mx-auto">
      <div>
        <h1 className="text-3xl font-inter mb-2">Test Your Knowledge with Interactive Quizzes</h1>
        <p className="mb-2 text-secondary">Challenge yourself with thousands of quizzes across various categories. Learn, compete and have fun</p>
        <div>
          <NavLink to={"/login"} className="py-2 px-5 bg-black text-white rounded-md cursor-pointer hover:text-black hover:bg-transparent border-1 border-black inline-block">Start a Quiz</NavLink>
        </div>
      </div>

    </section>
  )
}

export default Hero
import { NavLink } from "react-router-dom"

const Main = () => {
  return (
    <section>
      <div className="bg-tetiary p-7 flex-center flex-col border-t-1 border-t-accent border-b-1 border-b-accent">
        <h2 className="font-inter text-xl mb-1">Find the Perfect Quiz for You</h2>
        <p className="text-secondary mb-2">Take quizzes from our collection of quizzes</p>
        <NavLink to={"/login"} className="py-1 px-5 bg-black text-white rounded-md cursor-pointer hover:text-black hover:bg-transparent border-1 border-black">Search</NavLink>
      </div>
    </section>
  )
}

export default Main
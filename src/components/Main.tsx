import { NavLink } from "react-router-dom"
import science from "../assets/Science.png"
import arts from "../assets/Arts.png"
import history from "../assets/History.png"
import mythology from "../assets/Mythology.png"
import computers from "../assets/Computers.png"
import politics from "../assets/Politics.png"
import sports from "../assets/Sports.png"
import anime from "../assets/Anime.png"

const Main = () => {
  return (
    <section>
      <div className="bg-tetiary p-7 flex-center flex-col border-t-1 border-t-accent border-b-1 border-b-accent">
        <h2 className="font-inter text-xl mb-1">Find the Perfect Quiz for You</h2>
        <p className="text-secondary mb-2">Take quizzes from our collection of quizzes</p>
        <NavLink to={"/login"} className="btn-black">Search</NavLink>
      </div>
      <div>
        <h1 className="text-2xl font-inter text-center mt-6">Featured Quiz</h1>
        <p className="text-secondary mb-2 text-center">Explore our most popular and trending quiz</p>
        <div className="p-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-[90%] mx-auto">
          <div className="p-3 shadow-sm rounded-md">
            <img src={science} className="h-[200px] mx-auto mb-2" />
            <h2 className="text-xl font-inter">Science</h2>
            <p className="text-secondary mb-3">explore the world of science and the latest in technology with this engaging quiz</p>
            <NavLink to={"/login"} className="btn-black-full">Start Quiz</NavLink>
          </div>
          <div className="p-3 shadow-sm rounded-sm">
            <img src={arts} className="h-[200px] mx-auto mb-3" />
            <h2 className="text-xl font-inter mb-1">Arts and Entertainment</h2>
            <p className="text-secondary mb-3">Celebrate creativity through painting, music, literature and expression</p>
            <NavLink to={"/login"} className="btn-black-full">Start Quiz</NavLink>
          </div>
          <div className="p-3 shadow-sm rounded-sm">
            <img src={history} className="h-[200px] mx-auto mb-2" />
            <h2 className="text-xl font-inter">History</h2>
            <p className="text-secondary mb-3">Take a deep dive into the past and and uncover the events that shaped the world</p>
            <NavLink to={"/login"} className="btn-black-full">Start Quiz</NavLink>
          </div>
          <div className="p-3 shadow-sm rounded-sm">
            <img src={mythology} className="h-[200px] mx-auto mb-2" />
            <h2 className="text-xl font-inter">Mythology</h2>
            <p className="text-secondary mb-3">Explore ancients legends, gods and mythical tales from every culture</p>
            <NavLink to={"/login"} className="btn-black-full">Start Quiz</NavLink>
          </div>
          <div className="p-3 shadow-sm rounded-sm">
            <img src={anime} className="h-[200px] mx-auto mb-2" />            
            <h2 className="text-xl font-inter">Anime & Manga</h2>
            <p className="text-secondary mb-3">Enter the vibrant world of anime stories, characters and fan culture</p>
            <NavLink to={"/login"} className="btn-black-full">Start Quiz</NavLink>
          </div>
          <div className="p-3 shadow-sm rounded-sm">
            <img src={computers} className="h-[200px] mx-auto mb-3" /> 
            <h2 className="text-xl font-inter">Tech & Computers</h2>
            <p className="text-secondary mb-3">Understand the digital world from hardware to software and beyound</p>
            <NavLink to={"/login"} className="btn-black-full">Start Quiz</NavLink>
          </div>
          <div className="p-3 shadow-sm rounded-sm">
            <img src={sports} className="h-[200px] mx-auto mb-2" /> 
            <h2 className="text-xl font-inter">Sports</h2>
            <p className="text-secondary mb-3">Catch the thrill, passion and stories behind every game and athlete</p>
            <NavLink to={"/login"} className="btn-black-full">Start Quiz</NavLink>
          </div>
          <div className="p-3 shadow-sm rounded-sm">
            <img src={politics} className="h-[200px] mx-auto mb-2" /> 
            <h2 className="text-xl font-inter">Politics</h2>
            <p className="text-secondary mb-3">Stay informed with the global issues, leaders and power dynamics</p>
            <NavLink to={"/login"} className="btn-black-full">Start Quiz</NavLink>
          </div>
        </div>
      </div>
      <div className="bg-thinBlack text-white py-8 px-4 sm:flex-center flex-col mt-6">
        <h2 className="font-inter text-xl mb-1">Ready to Test Your Knwoledge?</h2>
        <p className="text-accentLight mb-4 sm:text-center">Join thousands of users who challenge themselves daily with our quizzes. Sign up for free and start playing!</p>
        <NavLink to={"/login"} className="py-2 px-5 text-black rounded-md cursor-pointer border-1 inline-block bg-white">Sign Up Now</NavLink>
      </div>
    </section>
  )
}

export default Main
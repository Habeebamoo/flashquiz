import { IoIosArrowForward } from "react-icons/io"
import { NavLink } from "react-router-dom"

const Page = () => {
  return (
    <>
      <section className="p-2 mt-[70px]">
        <p className="text-secondary dark:text-white text-2xl mb-5">Welcome back, Micheal</p>
        <NavLink to={"/new"} className="btn-black">Start new Quiz</NavLink>
      </section>
      <div className="flex-center bg-white dark:bg-[#333] dark:text-white p-2 border-1 border-accentCold dark:border-[#444] mt-4 rounded-md w-[95%] mx-auto">Overview</div>
      <section className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 w-[95%] mx-auto">
        <div className="p-4 bg-white dark:bg-[#333] dark:text-white rounded-md border-1 border-accentCold dark:border-[#444]">
          <h2 className="font-inter text-sm text-thinBlack dark:text-white">Quiz Completed</h2>
          <p className="text-2xl font-bold">4</p>
        </div>
        <div className="p-4 bg-white dark:bg-[#333] dark:text-white rounded-md border-1 border-accentCold dark:border-[#444]">
          <h2 className="font-inter text-sm text-thinBlack dark:text-white">Average Score</h2>
          <p className="text-2xl font-bold">78%</p>
        </div>
        <div className="p-4 bg-white dark:bg-[#333] dark:text-white rounded-md border-1 border-accentCold dark:border-[#444]">
          <h2 className="font-inter text-sm text-thinBlack dark:text-white">Current Rank</h2>
          <p className="text-2xl font-open font-bold">Quiz Master</p>
        </div>
      </section>
      <section className="p-4 bg-white dark:bg-[#333] dark:text-white rounded-md border-1 border-accentCold dark:border-[#444] w-[95%] mx-auto mt-[20px]">
        <div className="flex-between py-2 mb-1">
          <div>
            <h2 className="font-inter text-lg">Recent Quizzes</h2>
            <p className="text-sm text-secondary dark:text-accentLight">Your latest quiz activities</p>
          </div>
          <div className="flex-end cursor-pointer">
            <p className="mr-1 hover:text-secondary">View All</p>
            <IoIosArrowForward />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="flex-between border-b-1 border-b-accent sm:border-1 sm:border-accent sm:px-2 sm:rounded-md pt-2 pb-3">
            <div>
              <h2 className="font-inter">Science</h2>
              <p className="text-sm text-secondary dark:text-accentLight">Science - 8 min</p>
            </div>
            <div className="flex-end cursor-pointer">
              <p className="mr-1 hover:text-secondary">85/100</p>
              <IoIosArrowForward />
            </div>
          </div>
          <div className="flex-between border-b-1 border-b-accent sm:border-1 sm:border-accent sm:px-2 sm:rounded-md pt-2 pb-3">
            <div>
              <h2 className="font-inter">Mythology</h2>
              <p className="text-sm text-secondary dark:text-accentLight">Mythology - 17 min</p>
            </div>
            <div className="flex-end cursor-pointer">
              <p className="mr-1 hover:text-secondary">77/100</p>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
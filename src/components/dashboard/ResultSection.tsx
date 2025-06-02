import { useEffect, useState } from "react"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { FaBook, FaCheckCircle, FaHome, FaRegClock, FaSpinner } from "react-icons/fa"
import { MdCancel } from "react-icons/md"
import Loading from "../Loading"
import { useNavigate } from "react-router-dom"
import { useTheme } from "../../context/ThemeContext"

const ResultSection = () => {
  const [percentage, setPercentage] = useState<number>(0)
  const { theme } = useTheme()
  const target = 90

  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < target) return prev + 1
        clearInterval(interval)
        return target
      })
    }, 15)
  }, [])

  const toHome = () => {
    window.location.href = "/dashboard"
  }

  const toInfo = () => {
    window.location.href = "/dashboard/info"
  }

  const themeText = (): string => {
    if (percentage <= 49) {
      return "tomato"
    } else if (percentage <= 69) {
      return ""
    } else if (percentage <= 89) {
      return "rgb(216, 238, 15)"
    } else {
      return "rgb(37, 207, 22)"
    }
  }

  const comment = (): string => {
    if (percentage <= 49) {
      return "Poor"
    } else if (percentage <= 69) {
      return "Good"
    } else if (percentage <= 89) {
      return "Excellent"
    } else {
      return "Perfect"
    }
  }

  const loading = false
  const clockTheme = theme == "light" ? "rgb(76, 77, 78)" : "white"
  const bookTheme = theme === "light" ? "black" : "white"

  const pageContent = loading ? (
    <Loading />
  ) : (
    <section className="mt-[80px]">
      <div className="text-center mt-[50px] mb-5">
        <h1 className="text-3xl font-inter dark:text-white">Quiz Result</h1>
        <p className="text-secondary dark:text-white">Science</p>        
      </div>
      <div className="">
        <div className="bg-white dark:bg-[#333] rounded-md border-1 border-accentCold dark:border-[#444] p-6 mb-3">
          <div className="flex-center mx-auto h-50 w-50">
            <CircularProgressbar 
              value={percentage} 
              text={`${percentage}%`}
              strokeWidth={10} 
              styles={buildStyles({
                textColor: themeText(),
                pathColor: themeText(),
                trailColor: "#d6d6d6"
              })}
            />
          </div>
          <h1 className="text-2xl text-center dark:text-white font-open mt-6">{comment()}</h1>
          <h2 className="font-inter dark:text-white mt-6 max-sm:text-center">Quiz Statistics</h2>
          <div className="mt-2 flex-between">
            <div>
              <p className="text-secondary text-sm dark:text-white">Correct answers</p>
              <div className="flex-start">
                <FaCheckCircle color="green" />
                <p className="ml-2 font-inter dark:text-white">17/20</p>
              </div>
            </div>
            <div>
              <p className="text-secondary text-sm dark:text-white">Incorrect answers</p>
              <div className="flex-start">
                <MdCancel color="red" size={20} />
                <p className="ml-2 font-inter dark:text-white">3/20</p>
              </div>
            </div>
            <div>
              <p className="text-secondary text-sm dark:text-white">Time Taken</p>
              <div className="flex-start">
                <FaRegClock color={clockTheme} />
                <p className="ml-2 font-inter dark:text-white">05:23</p>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:flex-start items-center">
            <button className="btn-black max-sm:w-full mt-2 flex-center">
              <FaSpinner className="mr-2" />
              Retry
            </button>
            <button className="btn-white sm:ml-2 max-sm:w-full mt-2 flex-center">
              <FaHome className="mr-2" />
              <span>Dashboard</span>
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-[#333] rounded-md border-1 border-accentCold dark:border-[#444] p-6 mb-3">
          <h1 className="font-inter text-xl dark:text-white">Review Incorrect Answers</h1>
          <p className="text-secondary dark:text-white text-small">Learn from your mistakes and improve next time</p>
          <div className="mt-4">
            <div className="rounded-md border-1 border-accentCold dark:border-[#555] p-4">
              <h2 className="font-inter dark:text-white">What is the capital of France</h2>
              <div className="flex-start mt-2">
                <MdCancel color="red" size={18} />
                <p className="text-secondary ml-2 dark:text-accentLight">Your answer</p>
              </div>
              <p className="font-inter ml-7 dark:text-white">London</p>
              <div className="flex-start mt-2">
                <FaCheckCircle color="green" />
                <p className="text-secondary ml-2 dark:text-accentLight">Correct answer</p>
              </div>
              <p className="font-inter ml-7 dark:text-white">Paris</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="rounded-md border-1 border-accentCold dark:border-[#555] p-4">
              <h2 className="font-inter dark:text-white">What is the capital of France</h2>
              <div className="flex-start mt-2">
                <MdCancel color="red" size={18} />
                <p className="text-secondary ml-2 dark:text-accentLight">Your answer</p>
              </div>
              <p className="font-inter ml-7 dark:text-white">London</p>
              <div className="flex-start mt-2">
                <FaCheckCircle color="green" />
                <p className="text-secondary ml-2 dark:text-accentLight">Correct answer</p>
              </div>
              <p className="font-inter ml-7 dark:text-white">Paris</p>
            </div>
          </div>
          <button onClick={() => navigate("/dashboard/answers")} className="btn-black max-sm:w-full mt-3">View All</button>
        </div>
      </div>
    </section>
  )

  return (
    <>
      {pageContent}
    </>
  )
}

export default ResultSection
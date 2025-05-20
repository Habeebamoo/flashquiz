import { useEffect, useState } from "react"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import { getImage } from "../../utils/image"
import "react-circular-progressbar/dist/styles.css"
import { FaBook, FaCheckCircle, FaRegClock } from "react-icons/fa"
import { MdCancel } from "react-icons/md"
import Loading from "../Loading"
import { useNavigate } from "react-router-dom"

const ResultSection = () => {
  const [percentage, setPercentage] = useState<number>(0)
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

  const theme = (): string => {
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

  const pageContent = loading ? (
    <Loading />
  ) : (
    <section className="mt-[80px]">
      <div className="text-center mt-[50px] mb-5">
        <h1 className="text-3xl font-inter">Quiz Result</h1>
        <p className="text-secondary">Science</p>        
      </div>
      <div className="">
        <div className="bg-white rounded-md border-1 border-accentCold p-6 mb-3">
          <div className="flex-center mx-auto h-50 w-50">
            <CircularProgressbar 
              value={percentage} 
              text={`${percentage}%`}
              strokeWidth={10} 
              styles={buildStyles({
                textColor: theme(),
                pathColor: theme(),
                trailColor: "#d6d6d6"
              })}
            />
          </div>
          <h1 className="text-2xl text-center font-open mt-6">{comment()}</h1>
          <h2 className="font-inter mt-6 max-sm:text-center">Quiz Statistics</h2>
          <div className="mt-2 flex-between">
            <div>
              <p className="text-secondary">Correct answers</p>
              <div className="flex-start">
                <FaCheckCircle color="green" />
                <p className="ml-2 font-inter">17/20</p>
              </div>
            </div>
            <div>
              <p className="text-secondary">Incorrect answers</p>
              <div className="flex-start">
                <MdCancel color="red" size={20} />
                <p className="ml-2 font-inter">3/20</p>
              </div>
            </div>
            <div>
              <p className="text-secondary">Time Taken</p>
              <div className="flex-start">
                <FaRegClock color="rgb(76, 77, 78)" />
                <p className="ml-2 font-inter">05:23</p>
              </div>
            </div>
          </div>
          <button className="btn-black max-sm:w-full mt-4">Retry</button>
        </div>

        <div className="bg-white rounded-md border-1 border-accentCold p-6 mb-3">
          <h1 className="font-inter text-xl">Review Incorrect Answers</h1>
          <p className="text-secondary text-small">Learn from your mistakes and improve next time</p>
          <div className="mt-4">
            <div className="rounded-md border-1 border-accentCold p-4">
              <h2 className="font-inter">What is the capital of France</h2>
              <div className="flex-start mt-2">
                <MdCancel color="red" size={18} />
                <p className="text-secondary ml-2">Your answer</p>
              </div>
              <p className="font-inter ml-7">London</p>
              <div className="flex-start mt-2">
                <FaCheckCircle color="green" />
                <p className="text-secondary ml-2">Correct answer</p>
              </div>
              <p className="font-inter ml-7">Paris</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="rounded-md border-1 border-accentCold p-4">
              <h2 className="font-inter">What is the capital of France</h2>
              <div className="flex-start mt-2">
                <MdCancel color="red" size={18} />
                <p className="text-secondary ml-2">Your answer</p>
              </div>
              <p className="font-inter ml-7">London</p>
              <div className="flex-start mt-2">
                <FaCheckCircle color="green" />
                <p className="text-secondary ml-2">Correct answer</p>
              </div>
              <p className="font-inter ml-7">Paris</p>
            </div>
          </div>
          <button onClick={() => navigate("/dashboard/answers")} className="btn-black max-sm:w-full mt-3">View All</button>
        </div>

        <div className="flex-center flex-col bg-white rounded-md border-1 border-accentCold p-4 mb-3">
          <img src={getImage("science")} className="h-[200px]" />
          <h1 className="text-2xl font-open mt-6">Category: Science</h1>
        </div>

        <div className="flex-center flex-col bg-white rounded-md border-1 border-accentCold p-4">
          <FaBook size={50} className="mt-2" />
          <h1 className="text-xl font-open mt-6">Question Passed: 5 of 20</h1>
          <button onClick={toInfo} className="btn-black mt-3">View All Answers</button>
          <button onClick={toHome} className="btn-black mt-3">Back to Home</button>
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
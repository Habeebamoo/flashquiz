import { useEffect, useState } from "react"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import { getImage } from "../../utils/image"
import "react-circular-progressbar/dist/styles.css"
import { FaBook } from "react-icons/fa"
import Loading from "../Loading"

const ResultSection = () => {
  const [percentage, setPercentage] = useState<number>(0)
  const target = 90

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

  const score = (): string => {
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
    <section className="mt-[70px]">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div className="flex-center flex-col bg-white rounded-md border-1 border-accentCold p-4">
          <div className="flex-center h-50 w-50">
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
          <h1 className="text-2xl font-open mt-6">Score: {score()}</h1>
        </div>
        <div className="flex-center flex-col bg-white rounded-md border-1 border-accentCold p-4">
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
import { useEffect, useState } from "react"
import { FaStopwatch } from "react-icons/fa"

const QuizSection = () => {
  const [timeLeft, setTimeLeft] = useState<number>(20)

  if (timeLeft <= 0) {
    window.location.href = "/dashboard/result";
  }

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000)

    return () => clearInterval(interval)
  }, [timeLeft])

  const handleNext = () => {
    window.location.href = "/dashboard/result"
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  return (
    <main className="flex-center bg-accentXlight h-[100vh]">
      <div className="bg-white p-5 border-1 border-accentCold rounded-md w-[90%] sm:w-[400px] rounded-lg">
        <div className="flex-end">
          <FaStopwatch />
          <p className="text-lg font-open ml-1">{formatTime(timeLeft)}</p>
        </div>
        <h2 className="font-open text-lg mt-5">1. What is the capital of france</h2>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 my-8">
          <button className="p-3 mb-1 btn-black">Paris</button>
          <button className="p-3 mb-1 btn-black">London</button>
          <button className="p-3 mb-1 btn-black">New york</button>
          <button className="p-3 mb-1 btn-black">Nigeria</button>
        </div>
        <div className="flex-between w-[90%] mx-auto">
          <p className="text-sm text-secodary">Question 1 of 20</p>
          <button onClick={handleNext} className="btn-black">Next</button>
        </div>
      </div>
    </main>
  )
}

export default QuizSection
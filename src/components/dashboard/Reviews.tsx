import { FaCheckCircle } from "react-icons/fa"
import { MdCancel } from "react-icons/md"
import { useNavigate } from "react-router-dom"

const Reviews = () => {
  const navigate = useNavigate()

  return (
    <section className="mt-[80px]">
      <div className="text-center mt-[50px] mb-5">
        <h1 className="text-3xl font-inter dark:text-white">Reviews</h1>
        <p className="text-secondary dark:text-white">View all correct answers</p>        
      </div>
      <div className="bg-white dark:bg-[#333] rounded-md border-1 border-accentCold dark:border-[#444] p-3">
        <div className="rounded-md border-1 border-accentCold dark:border-[#555] p-4 mb-4">
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
        <div className="rounded-md border-1 border-accentCold dark:border-[#555] p-4 mb-4">
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
      <button onClick={() => navigate("/dashboard/result")} className="block btn-black mx-auto my-4">Go Back</button>
    </section>
  )
}

export default Reviews
import React, { useState } from "react"
import { useUser } from "../../context/UserContext"

const NewQuiz = () => {
  const [form, setForm] = useState({
    category: "science",
    time: 0.5,
    difficulty: "easy",
    amount: 10
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(form)
    window.location.href = "/quiz"
  }

  return (
    <main>
      <section className="flex-center bg-accentXlight dark:bg-[#111] h-[100vh]">
        <form onSubmit={handleSubmit} className="bg-white dark:bg-[#333] p-3 border-1 border-accentCold dark:border-[#444] rounded-md w-[90%] sm:w-[400px] rounded-md">
          <h1 className="text-center font-inter dark:text-white text-lg py-3">Select your Preference</h1>
          <div className="p-2">
            <label htmlFor="category" className="font-inter dark:text-white">Category</label>
            <select 
              name="category" 
              id="category" 
              className="input dark:border-[#555] dark:bg-white"
              value={form.category}
              onChange={(e) => setForm(prev => ({...prev, category: e.target.value}))}
              required
            >
              <option value="science">Science</option>
              <option value="arts">Arts & Entertainment</option>
              <option value="anime">Anime & Manga</option>
              <option value="computers">Tech & Computers</option>
              <option value="history">History</option>
              <option value="mythology">Mythology</option>
              <option value="politics">Politics</option>
              <option value="sports">Sports</option>
            </select>
          </div>
          <div className="p-2">
            <label htmlFor="time" className="font-inter dark:text-white">Time</label>
            <select 
              name="time" 
              id="time" 
              className="input dark:border-[#555] dark:bg-white"
              value={form.time}
              onChange={(e) => setForm(prev => ({...prev, time: Number(e.target.value)}))}
              required
            >
              <option value="30">30 Sec</option>
              <option value="60">1 Minutes</option>
              <option value="120">2 Minutes</option>
              <option value="300">5 Minutes</option>
              <option value="600">10 Minutes</option>
              <option value="1800">30 Minutes</option>
            </select>
          </div>
          <div className="p-2">
            <label htmlFor="difficulty" className="font-inter dark:text-white">Difficulty</label>
            <select 
              name="difficulty" 
              id="difficulty" 
              className="input dark:border-[#555] dark:bg-white"
              value={form.difficulty}
              onChange={(e) => setForm(prev => ({...prev, difficulty: e.target.value}))}
              required
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <div className="p-2">
            <label htmlFor="amount" className="font-inter dark:text-white">Amount</label>
            <input 
              type="number" 
              name="amount" 
              id="amount" 
              className="input dark:border-[#555] dark:bg-white" 
              min={10} 
              max={50} 
              value={form.amount}
              onChange={(e) => setForm(prev => ({...prev, amount: Number(e.target.value)}))}
              required
            />
          </div>
          <div className="p-2">
            <button className="w-full mt-1 btn-black">Start Quiz</button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default NewQuiz
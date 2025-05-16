const NewQuiz = () => {
  return (
    <main className="mt-[100px] w-[95%] sm:w-[400px] h-[100vh] mx-auto">
      <div className="bg-white p-3 border-1 border-accentCold rounded-md">
        <h1 className="text-center font-inter text-lg py-3">Select your Preference</h1>
        <div className="p-2">
          <label htmlFor="category" className="font-inter">Category</label>
          <select name="category" id="category" className="w-full border-1 border-accentCold p-1 rounded-md focus:border-accentCold cursor-pointer mt-2">
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
          <label htmlFor="time" className="font-inter">Time</label>
          <select name="time" id="time" className="input">
            <option value="0.5">30 Sec</option>
            <option value="1">1 Minutes</option>
            <option value="2">2 Minutes</option>
            <option value="5">5 Minutes</option>
            <option value="10">10 Minutes</option>
            <option value="30">30 Minutes</option>
          </select>
        </div>
        <div className="p-2">
          <label htmlFor="difficulty" className="font-inter">Difficulty</label>
          <select name="difficulty" id="difficulty" className="input">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div className="p-2">
          <button className="w-full mt-1 btn-black">Start Quiz</button>
        </div>
      </div>
    </main>
  )
}

export default NewQuiz
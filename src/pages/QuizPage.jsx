import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiSolidStopwatch } from "react-icons/bi";
import QuizBox from "../components/QuizBox";

export default function QuizPage() {
  const [formData, setFormData] = useState(() => JSON.parse(localStorage.getItem('user-cred')))
  const [time, setTime] = useState(formData.minutes * 60);
  const [quizIndex, setQuizIndex] = useState(0);

  const navigate = useNavigate();
  
  useEffect(() => {
    if(time <= 0) {
      onFinish();  
      return
    };

    const interval = setInterval(() => {
      setTime(prev => {
        if(prev <= 1) {
          clearInterval(interval);
          onFinish();
          return 0;
        }

        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval);
  }, [time])

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const formatedMins = minutes > 9 ? minutes : `0${minutes}`;
  const formatedSecs = seconds > 9 ? seconds : `0${seconds}`;

  function onFinish() {
    navigate('/end-page');
  }

  const handleNext = () => {
    setQuizIndex(prev => prev + 1)
  }

  return (
    <main className="quiz-page">
      <div className="quiz-container">
        <div className="stopwatch">
          <BiSolidStopwatch size={25} color="tomato" />
          <h3>{formatedMins}:{formatedSecs}</h3>
        </div>
        <QuizBox 
          quizIndex={quizIndex} 
          nextQuestion={handleNext} 
          optionType="boolean"
        />
      </div>
    </main>
  )
}
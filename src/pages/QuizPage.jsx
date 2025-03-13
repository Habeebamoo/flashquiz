import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiSolidStopwatch } from "react-icons/bi";
import QuizBox from "../components/QuizBox";

export default function QuizPage() {
  const [formData, setFormData] = useState(() => JSON.parse(localStorage.getItem('user-cred')))
  const [time, setTime] = useState(formData.minutes * 60);
  const [quiz, setQuiz] = useState(() => JSON.parse(localStorage.getItem("quiz")))
  const [currentIndex, setCurrentIndex] = useState(0);

  const noOfQuestions = formData.questionNumber;
  const lastQuestion = currentIndex + 1 == noOfQuestions;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await fetch("https://opentdb.com/api.php?amount=12&category=21&difficulty=hard&type=multiple");
        const data = await res.json();
        localStorage.setItem("quiz", JSON.stringify(data.results));
      } catch(err) {
        console.log("This is Error", err)
      }
    }

    fetchQuiz();
  }, [])

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
    setCurrentIndex(prev => prev + 1)
  }

  return (
    <main className="quiz-page">
      <div className="quiz-container">
        <div className="stopwatch">
          <BiSolidStopwatch size={25} color="tomato" />
          <h3>{formatedMins}:{formatedSecs}</h3>
        </div>
        <QuizBox 
          currentIndex={currentIndex}
          quiz={quiz}
          nextQuestion={handleNext} 
          optionType="boolean"
          lastQuestion={lastQuestion}
        />
      </div>
    </main>
  )
}
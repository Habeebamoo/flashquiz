import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { BiSolidStopwatch } from "react-icons/bi";
import QuizBox from "../components/QuizBox";

export default function QuizPage() {
  const [formData, setFormData] = useState(() => JSON.parse(localStorage.getItem('user-cred')))
  const [time, setTime] = useState(formData.minutes * 60);
  const [quiz, setQuiz] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem("quizScore");
    return JSON.parse(savedScore) || 0;
  });
  const [pageReady, setPageReady] = useState(false);

  const noOfQuestions = formData.questionNumber;
  const lastQuestion = currentIndex + 1 == noOfQuestions;

  const navigate = useNavigate();

  useEffect(() => {
    const storedQuiz = JSON.parse(localStorage.getItem("quiz"));
    const storedIndex = JSON.parse(localStorage.getItem("currentIndex"));

    if(storedQuiz) {
      setQuiz(storedQuiz);
      setCurrentIndex(storedIndex);
      setPageReady(true)
    }
  }, []);

  useEffect(() => {
    const hasReloaded = JSON.parse(localStorage.getItem("hasReloaded"));
    if(!hasReloaded) {
      setTimeout(() => window.location.reload(), 5000);
      localStorage.setItem("hasReloaded", "true")
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("currentIndex", JSON.stringify(currentIndex));
  }, [currentIndex])

  useEffect(() => {
    localStorage.setItem("quizScore", JSON.stringify(score))
  }, [score])

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
    const percentage = (score / noOfQuestions) * 100;
    localStorage.setItem("percentage", JSON.stringify(percentage))
    navigate('/end-page');
  }

  const handleNext = () => {
    if(lastQuestion) {
      onFinish();
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  }

  const handleOption = (optionSelected) => {
    if(currentQuiz.correct_answer == optionSelected) {
      setScore(prev => prev + 1)
    }
  }

  const currentQuiz = quiz[currentIndex]

  return (
    <main className="quiz-page">
      {pageReady ?
        <div className="quiz-container">
          <div className="stopwatch">
            <BiSolidStopwatch size={25} color="tomato" />
            <h3>{formatedMins}:{formatedSecs}</h3>
          </div>
          <QuizBox 
            currentIndex={currentIndex}
            currentQuiz={currentQuiz}
            nextQuestion={handleNext} 
            lastQuestion={lastQuestion}
            handleOption={handleOption}
            totalQuestions={noOfQuestions}
          />
        </div> : (
          <ClipLoader size={50} color="tomato" />
        )
      }
    </main>
  )
}

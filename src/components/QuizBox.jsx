import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function QuizBox(props) {
  const [options, setOptions] = useState([]);
  const [currentQuizAnswered, setCurrentQuizAnswered] = useState(false)

  const currentIndex = props.currentIndex;
  const currentQuiz = props.currentQuiz
  const handleOption = props.handleOption;
  const lastQuestion = props.lastQuestion;
  const totalQuestions = props.totalQuestions;

  useEffect(() => {
    setCurrentQuizAnswered(false)
  }, [currentQuiz])

  let optionArray = [];

  optionArray.push(currentQuiz.correct_answer);
  currentQuiz.incorrect_answers.forEach(ans => {
    optionArray.push(ans)
  })

  const shuffle = (array) => { 
    const shuffledArray = [...array];

    for(let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
  }

  const decodeHTML = (html) => {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  const quizOptionsArray = shuffle(optionArray);

  useEffect(() => {
    setOptions(quizOptionsArray);
  }, [currentIndex])

  const styles = {
    button: {
      marginRight: "5px"
    }
  }

  const clickOption = (value) => {
    handleOption(value);
    setCurrentQuizAnswered(true)
  }

  return (
    <div className="quiz-box">
      <p className="question">{decodeHTML(currentQuiz.question)}</p>
      <div className={`options ${currentQuizAnswered ? "answered" : null}`}>
        {options.map((ans, i) => {
          return <Options key={i} value={ans} handleOption={clickOption} />
        })}
      </div>
      <div className="footer">
        <p>Question {currentIndex + 1} of {totalQuestions}</p>
        <button onClick={props.nextQuestion}>
          <span style={styles.button}>
            {lastQuestion ? "Finish" : "Next"}
          </span>
          <FaArrowRight color="white" />
        </button>
      </div>
    </div>
  )
}

function Options({ value, handleOption }) {
  const decodeHTML = (html) => {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
  return (
    <>
      <button onClick={() => handleOption(value)}>{decodeHTML(value)}</button>
    </>
  )
}

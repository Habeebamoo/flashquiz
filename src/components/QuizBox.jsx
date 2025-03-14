import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa"

export default function QuizBox(props) {
  const [options, setOptions] = useState([]);
  const [currentQuizAnswered, setCurrentQuizAnswered] = useState(false)

  const currentIndex = props.currentIndex;
  const handleOption = props.handleOption;
  const currentQuiz = props.currentQuiz
  const lastQuestion = props.lastQuestion;

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
        {options.map(ans => {
          return <Options value={ans} handleOption={clickOption} />
        })}
      </div>
      <div className="footer">
        <p>Question {currentIndex + 1} of 10</p>
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
  return (
    <>
      <button onClick={() => handleOption(value)}>{value}</button>
    </>
  )
}
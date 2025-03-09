import { FaArrowRight } from "react-icons/fa"

export default function QuizBox(props) {
  const step = props.quizIndex + 1;

  const styles = {
    button: {
      marginRight: "5px"
    }
  }

  return (
    <div className="quiz-box">
      <p className="question">Who is Macron</p>
      <div className="options">
        <button>me</button>
        <button>you</button>
      </div>
      <div className="footer">
        <p>Question {step} of 10</p>
        <button onClick={props.nextQuestion}>
          <span style={styles.button}>Next</span>
          <FaArrowRight color="white" />
        </button>
      </div>
    </div>
  )
}
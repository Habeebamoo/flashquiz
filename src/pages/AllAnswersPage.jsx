import { useNavigate } from "react-router-dom";
import Answer from "../components/Answer"

export default function AllAnswersPage() {
  const quiz = JSON.parse(localStorage.getItem("quiz"));
  const navigate = useNavigate();

  return (
    <main className="all-answers-page">
      <h2>All Answers</h2>
      <div className="answers">
        {quiz.map(obj => <Answer question={obj.question} answer={obj.correct_answer} />)}
      </div>
      <button
        onClick={() => navigate("/end-page")}
      >Go Back</button>
    </main>
  )
}
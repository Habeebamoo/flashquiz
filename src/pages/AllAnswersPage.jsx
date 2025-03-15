import { useNavigate } from "react-router-dom";
import Answer from "../components/Answer";

export default function AllAnswersPage() {
  const quiz = JSON.parse(localStorage.getItem("quiz"));
  const navigate = useNavigate();

  const decodeHTML = (html) => {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  return (
    <main className="all-answers-page">
      <h2>All Answers</h2>
      <div className="answers">
        {quiz.map(obj => <Answer question={decodeHTML(obj.question)} answer={obj.correct_answer} />)}
      </div>
      <button
        onClick={() => navigate("/end-page")}
      >
        Go Back
      </button>
    </main>
  )
}
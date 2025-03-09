import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { heroImage } from "../utils/hero";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  const [image, setImage] = useState(() => heroImage())
  const navigate = useNavigate();
  
  const goToQuiz = () => {
    navigate("/quiz-form")
  }

  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-text">
          <h1>FlashQuiz</h1>
          <p>
            FlashQuiz is the ultimate destination for fun, interactive, and knowledge-packed quizzes designed for learners, trivia enthisiasts, and anyone looking to challenge themselves.
          </p>
          <button onClick={goToQuiz} style={styles}>
            <span style={{marginRight: "5px"}}>Get Started</span>
            <FaArrowRight />
          </button>
        </div>
        <div className="hero-img">
          <img src={image} />
        </div>
      </div>
    </section>
  )
}
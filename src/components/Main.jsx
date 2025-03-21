import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { SiAdidas, SiBuiltbybit } from "react-icons/si";
import { FaRocket, FaSpotify } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";

export default function Main() {
  const navigate = useNavigate();
  
  const goToQuiz = () => {
    navigate("/quiz-form")
    localStorage.clear()
  }

  const styles = {
    redText: {
      color: "red"
    }
  }

  return (
    <main className="home-page">
      <h2>Our Sponsors</h2>
      <section className="sponsor">
        <SiAdidas size={70} />
        <FaSpotify size={60} />
        <FaMicrosoft size={60} />
        <SiBuiltbybit size={60} />
      </section>
      <section className="about">
        <h2>About</h2>
        <div className="about-cards">
          <div className="about-card">
            <h3>Information</h3>
            <p>
              FlashQuiz offers a wide variety of topics and difficulty levels. Whether you want to brush up your knowledge, compete with friends or simply explore new subjects, FlashQuiz provides seamless, engaging and user-friendly platform
            </p>
            <p>
              This website is powered by the <span style={styles.redText}>Open Trivia Database</span>, a reliable and extensive source of quiz questions covering a wide range of topics and difficulty levels.
            </p>
          </div>
          <div className="about-card">
            <h3>How it Works</h3>
            <p>This application can get started you up and running right away. Just go through this 4 steps</p>
            <div className="image-holder">
              <div>
                <ol>
                  <li>Select a Topic</li>
                  <li>Choose you Quiz type</li>
                  <li>Start the Quiz</li>
                  <li>Track your Progress</li>
                </ol>
              </div>
              <div className="image">
                <FaRocket size={50} color="tomato" />
              </div>
            </div>
            <button onClick={goToQuiz} style={styles.button}>
              <span style={{marginRight: "5px"}}>Get Started</span>
              <FaArrowRight />
            </button>
            </div>
        </div>
      </section>
    </main>
  )
}

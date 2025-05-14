import { Link } from "react-router-dom";
import { FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";

export default function Error() {
  return (
    <section className="notfound">
      <FaExclamationTriangle color="pink" size={40} />
      <h1>Unexpected Error</h1>
      <p>Please check your internet connection</p>
      <Link to="/">
        <FaArrowLeft color="black" />
        <span style={{color: "black"}}>Go Back</span>
      </Link>
    </section>
  )
}
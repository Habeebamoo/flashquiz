import { Link } from "react-router-dom";
import { FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="notfound">
      <FaExclamationTriangle color="pink" size={40} />
      <h1>404 Not Found</h1>
      <p>This page does not exist</p>
      <Link to="/">
        <FaArrowLeft color="black" />
        <span style={{color: "black"}}>Go Back</span>
      </Link>
    </section>
  )
}
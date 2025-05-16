import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <section className="flex-center flex-col p-3 mt-[100px] sm:mt-[200px] mb-8">
        <FaExclamationTriangle color="black" size={50} />
        <h1 className="font-inter text-xl mt-1">404 Not Found</h1>
        <p className="text-secondary mb-2">Oops, this page was not found</p>
        <Link to="/" className="flex-center btn-black">
          <span>Go Back</span>
        </Link>
      </section>
      <Footer />
    </>
  )
}
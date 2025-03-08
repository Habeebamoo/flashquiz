import { SiAdidas, SiBuiltbybit } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";

export default function Main() {
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

      </section>
    </main>
  )
}
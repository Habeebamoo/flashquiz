import science from "../assets/Science.png"
import arts from "../assets/Arts.png"
import history from "../assets/History.png"
import mythology from "../assets/Mythology.png"
import computers from "../assets/Computers.png"
import politics from "../assets/Politics.png"
import sports from "../assets/Sports.png"
import anime from "../assets/Anime.png"

export function getImage(category: string) {
  switch (category) {
    case "science":
      return science
    case "arts":
      return arts
    default:
      return science
  }
}
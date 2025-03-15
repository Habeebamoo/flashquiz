import AnimePng from "../assets/Anime.png"
import ComputersPng from "../assets/Computers.png";
import HistoryPng from "../assets/History.png";
import MythologyPng from "../assets/Mythology.png";
import PoliticsPng from "../assets/Politics.png";
import SciencePng from "../assets/Science.png";
import SportsPng from "../assets/Sports.png";

export function getCategoryImg(user) {
  switch(user.category) {
    case "Science":
      return SciencePng;
    case "Anime":
      return AnimePng;
    case "Tech":
      return ComputersPng;
    case "History":
      return HistoryPng;
    case "Mythology":
      return MythologyPng;
    case "Politics":
      return PoliticsPng;
    case "Sports":
      return SportsPng;
  }
}
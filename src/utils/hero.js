import AnimePng from "../assets/Anime.png"
import ComputersPng from "../assets/Computers.png";
import HistoryPng from "../assets/History.png";
import MythologyPng from "../assets/Mythology.png";
import PoliticsPng from "../assets/Politics.png";
import SciencePng from "../assets/Science.png";
import SportsPng from "../assets/Sports.png";

export function heroImage() {
  const images = [AnimePng, ComputersPng, HistoryPng, MythologyPng, PoliticsPng, SciencePng, SportsPng];

  const randomImage = images[Math.floor(Math.random() * images.length)];

  return randomImage;
}
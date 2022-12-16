import HeroImage from "../images/hero.png";
import "../index.css";

export default function Hero() {
  return (
    <section className="hero--section">
      <img src={HeroImage} alt="" className="hero--image" />
      <h1 className="hero--heading">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

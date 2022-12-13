import Navbar from "../Components/Navbar.js";
import Hero from "../Components/Hero.js";
import Card from "../Components/Card.js";
import data from "./data.js";
import "../Src/index.css";

export default function App() {
  const card = data.map((item) => (
    <Card
      id={item.id}
      title={item.title}
      description={item.description}
      price={item.price}
      coverImg={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
    />
  ));
  return (
    <>
      <Navbar />
      <Hero />
      <div className="cards--section">{card}</div>
    </>
  );
}

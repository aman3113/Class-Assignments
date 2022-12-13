import Athelete from "../images/athelete.png";
import Star from "../images/Star.png";
import "../Src/index.css";

export default function Card() {
  return (
    <div className="cards--section">
      <div className="card">
        <img src={Athelete} alt="card-image" className="card--image" />
        <div className="card--stats">
          <img src={Star} alt="" style={{ height: "14px" }} />
          <span>5.0</span>
          <span className="gray">(6)</span>
          <span className="gray">• USA</span>
        </div>
        <p className="card--text">Life Lessons with Katie Zaferes</p>
        <p>
          <span className="bold">From $136</span> / person
        </p>
      </div>
    </div>
  );
}

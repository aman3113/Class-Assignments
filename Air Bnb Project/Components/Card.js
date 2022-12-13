import "../Src/index.css";

export default function Card(props) {
  const image = `"../Src/images/${props.coverImg}"`;
  console.log(image);
  return (
    <div className="card">
      <img src={require(image)} alt="card-image" className="card--image" />
      <div className="card--stats">
        <img
          src={require("../Src/images/Star.png")}
          alt=""
          style={{ height: "14px" }}
        />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount})</span>
        <span className="gray">• {props.location}</span>
      </div>
      <p className="card--text">{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

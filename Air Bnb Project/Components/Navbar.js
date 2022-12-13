import Logo from "../Src/images/airbnb.png";
import "../Src/index.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={Logo} alt="Air Bnb Logo" className="nav--logo" />
    </nav>
  );
}

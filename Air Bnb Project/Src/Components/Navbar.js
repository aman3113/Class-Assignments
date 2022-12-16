import Logo from "../images/airbnb.png";
import "../index.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={Logo} alt="Air Bnb Logo" className="nav--logo" />
    </nav>
  );
}

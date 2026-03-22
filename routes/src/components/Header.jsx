import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ background: "#111", padding: "10px" }}>
      <Link to="/" style={{ color: "white", marginRight: "10px" }}>Home</Link>
      <Link to="/about" style={{ color: "white", marginRight: "10px" }}>About</Link>
      <Link to="/contact" style={{ color: "white", marginRight: "10px" }}>Contact</Link>
      <Link to="/user/1" style={{ color: "white" }}>User</Link>
    </header>
  );
}

export default Header;
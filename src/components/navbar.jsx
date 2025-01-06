import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1em", backgroundColor: "#f0f0f0" }}>
      <Link to="/" style={{ margin: "0 1em" }}>Home</Link>
      <Link to="/gallery" style={{ margin: "0 1em" }}>Gallery</Link>
      <Link to="/careers" style={{ margin: "0 1em" }}>Careers</Link>
      <Link to="/contact-us" style={{ margin: "0 1em" }}>Contact Us</Link>
    </nav>
  );
}

export default Navbar;

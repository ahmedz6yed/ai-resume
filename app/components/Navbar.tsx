import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <p className="text-3xl font-bold text-gradient ">ResuMate</p>
      </Link>
      <Link to="/upload" className="primary-button w-fit">
        Upload Resume
      </Link>
    </nav>
  );
}

export default Navbar;

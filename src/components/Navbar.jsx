

import "./../styles/Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">
        Port<span>folio</span>
      </h2>

      <ul>
        <li><NavLink to="/" end>  Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/skills">Skills</NavLink></li>
        <li><NavLink to="/projects">Project</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

    </nav>
  );
}

export default Navbar;
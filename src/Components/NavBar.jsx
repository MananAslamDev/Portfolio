import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import HeaderLogo  from "../assets/HeaderLogo.png";
const Navbar = () => {
  return (
    <header className="Header">
      <img src={HeaderLogo} alt="MA LOGO" className="HeaderLogo"></img>
      <nav className="NavBar">
        <ul className="NavLists">
          <li className="NavItems">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="NavItems">
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li className="NavItems">
            <NavLink to="/portfolio">PORTFOLIO</NavLink>
          </li>
          <li className="NavItems">
            <NavLink to="/services">SERVICES</NavLink>
          </li>
          <li className="NavItems">
            <NavLink to="/experience">EXPERIENCE</NavLink>
          </li>
          <li className="NavItems">
            <Button text="Contact" className="ContactButton" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

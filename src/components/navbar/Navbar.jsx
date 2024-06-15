import React, { useState } from "react";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import logo from "../../images/SDCodes.png";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    // Array of link objects
    { href: "#home", title: "Home" },
    { href: "#about", title: "About" },
    { href: "#projects", title: "Projects" },
    { href: "#contact", title: "Contact" },
  ];

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="react" />
      </div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <Link to="about" spy={true} smooth={true} offset={50} duration={1000}>
          About
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
        >
          Projects
        </Link>
      </div>
      <div className="button-container">
        <div className="navbar-button">
          <Link
            className="navbar-button-style"
            to="contact"
            spy={true}
            smooth={"easeInOutQuad"}
            offset={50}
            duration={1500}
          >
            LetsTalk!
          </Link>
        </div>
        <button className="menu-button" onClick={toggleMenu}>
          {isOpen ? <CgClose as="button" /> : <CgMenuRightAlt as="button" />}{" "}
        </button>
        {isOpen && (
          <Dropdown
            links={links}
            className={`dropdown ${isOpen ? "active" : ""}`}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;

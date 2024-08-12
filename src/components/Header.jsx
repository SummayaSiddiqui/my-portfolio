import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-box">
          <Link to="/">
            <button className="home-button">
              <i className="fas fa-home"></i> Home
            </button>
          </Link>
          <nav className="nav-links">
            <a href="#about">
              <i className="fas fa-user"></i> About
            </a>
            <a href="#projects">
              <i className="fas fa-briefcase"></i> Projects
            </a>
            <a href="#contact">
              <i className="fas fa-envelope"></i> Contact
            </a>
          </nav>
        </div>
      </header>
      <hr class="header-separator"></hr>
    </>
  );
};

export default Header;

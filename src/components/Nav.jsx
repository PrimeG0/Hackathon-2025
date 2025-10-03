import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">DURGA ONLINE</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#pandals">Pandals</a></li>
        <li><a href="#food">Food</a></li>
        <li><a href="#routes">Routes</a></li>
        <li><a href="#updates">Live Updates</a></li>
      </ul>
    </nav>
  );
};

export default Nav;

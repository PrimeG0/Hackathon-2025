import React from "react";
import "./Nav.css";
import { Routes, Route, useNavigate } from 'react-router-dom'

const Nav = () => {
   const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="nav-logo">DURGA ONLINE</div>
      <ul className="nav-links">
        <li><a onClick={() => navigate('/')} >Home</a></li>
        <li><a onClick={() => navigate('/pandals')} >Pandals</a></li>
        <li><a href="#food">Gallery</a></li>

        <li><a href="#updates">About Us</a></li>
      </ul>
    </nav>
  );
};

export default Nav;

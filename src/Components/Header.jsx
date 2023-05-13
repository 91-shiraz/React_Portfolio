import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FiAlignJustify } from "react-icons/fi";

let Header = () => {
  return (
    <>
      <nav class="navbar">
        <div class="max-width">
          <div className="logo">
            <Link to="/"><span> #SHAIKH </span></Link>
          </div>
          <ul className="menu">
            <li>
              <Link to="/" className="menu-btn">HOME</Link>
            </li>
            <li>
              <Link to="/About" className="menu-btn">ABOUT</Link>
            </li>
            <li>
              <Link to="/Services" className="menu-btn">SERVICES</Link>
            </li>
            <li>
              <Link to="/Skills" className="menu-btn">SKILLS</Link>
            </li>
            <li>
              <Link to="/Contact" className="menu-btn">CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div class=""><FiAlignJustify/></div>  
    </>
  );
};

export default Header;

// Bar compomnent for navigation bar
import "../Styles/Bar.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

export default function Bar(props) {
  const [isOpen, setIsOpen] = useState(false); 
  const wrapperRef = useRef(null); // referecning object

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener("mousedown",handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navigation-bar">
      <Link to="/" className="header">
        {" "}
        {props.title}{" "}
      </Link>
      <div className="nav-link">
        <div
          ref={wrapperRef}
          className="dropdown-wrapper"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          >
            <span className="links">contact</span>
            <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
              <a href="mailto:ksr23110367@fgmail.com" className="dropdown-link">
                ksr23110367@gmail.com
              </a>
              <a href="tel:+918489955594" className="dropdown-link">
                +91 8489955594
              </a>
            </div>
        </div>
        <Link to="/about" className="links">
          {" "}
          about{" "}
        </Link>
        <a
          href="https://github.com/Ignia707/TempConverter"
          className="links"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Github{" "}
        </a>
      </div>
    </div>
  );
}

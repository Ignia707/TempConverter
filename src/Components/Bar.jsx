// Bar compomnent for navigation bar
import "../Styles/Bar.css";
import { Link } from "react-router-dom";
import React from "react";

export default function Bar(props) {
  return (
    <div className="navigation-bar">
      <Link to="/" className="header">
        {" "}
        {props.title}{" "}
      </Link>
      <div className="nav-link">
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

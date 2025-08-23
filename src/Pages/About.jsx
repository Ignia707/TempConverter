// About page component
import "../Styles/About.css";
import React from "react";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About the TempConverter App</h1>
      <p className="about-text">
        This application is a simple temperature converter built to demonstrate
        fundamental concepts in React. It allows users to convert temperatures
        between Celsius and Fahrenheit and to increment or decrement the value.
      </p>
      <p className="about-text">
        The project was developed as a hands-on learning exercise, focusing on
        component architecture, props, and the `useState` hook for managing
        state.
      </p>
    </div>
  );
}

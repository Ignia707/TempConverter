// App component for main page rendering
import "../Styles/App.css";
import { Route, Routes } from "react-router-dom";
import About from "./About.jsx";
import Bar from "../Components/Bar.jsx";
import Card from "../Components/Card.jsx";
import React from "react";

export default function () {
  return (
    <>
      <Bar title="TempConverter" />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

// Button component for increment, decrement, celsius, fahrenheit buttons
import "../Styles/Button.css";
import React from "react";

export default function Button(props) {
  return (
    <button onClick={props.action} className={props.className}>
      {" "}
      {props.name}{" "}
    </button>
  );
}

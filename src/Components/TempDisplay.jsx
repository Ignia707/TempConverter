// Temperature Diplaying - for display temperature
import "../Styles/Card.css";
import React from "react";

export default function TempDisplay(props) {
  const roundedTemp = props.unroundedTemp.toFixed(1);
  return (
    <div>
      <p className="curr_temp">
        {" "}
        {roundedTemp}°{props.unit}{" "}
      </p>
    </div>
  );
}

import React, {useState} from "react";
import "../styles/elements/_baseView.scss";

export default function TrailBaseView() {
  return (
    <div className="tail-baseView">
      <div style={{backgroundColor: "green"}}>Rysunek szlaku</div>
      <img
        className="drawing-rock"
        src=".\src\assets\pics\drawings\01_Skala.png"
        alt="Rysunek skały Okiennik Wielki"
        height="400vh"
      ></img>
    </div>
  );
}

import "../styles/elements/_trail-info.scss";

import React from "react";

import {trail} from "../data/trail-info";

import ButtonBackToTrail from "../utils/ButtonBackToTrail";

export default function TrailInfo() {
  return (
    <>
      <div className="trail-container">
        <div className="trail-info">
          <h1>{trail.name}</h1>
          <p>{trail.description}</p>
          <ul>
            <h2>Więcej:</h2>
            {trail.links.map((el, idx) => (
              <li key={idx}>
                <a href={el.link}>{el.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ButtonBackToTrail />
      <img
        className="drawing-rock"
        src=".\src\assets\pics\drawings\01_Skala.png"
        alt="Rysunek skały Okiennik Wielki"
      ></img>
    </>
  );
}

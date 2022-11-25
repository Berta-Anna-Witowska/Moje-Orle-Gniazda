import React, {useState} from "react";
import "../styles/elements/_region-info.scss";
import {region} from "../data/region-info";

export default function RegionInfo() {
  return (
    <>
      <div className="region-info">
        <h1>{region.name}</h1>
        <p>{region.description}</p>
        <ul>
          <h2>Więcej:</h2>
          {region.links.map((el, idx) => (
            <li key={idx}>
              <a href={el.link}>{el.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <img
        className="drawing-rock"
        src=".\src\assets\pics\drawings\01_Skala.png"
        alt="Rysunek skały Okiennik Wielki"
        height="40%"
      ></img>
    </>
  );
}

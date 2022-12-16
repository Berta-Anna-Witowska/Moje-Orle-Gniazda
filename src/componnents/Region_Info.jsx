import "../styles/elements/_region-info.scss";

import React from "react";

import {region} from "../data/region-info";
import rock1Drawing from "../assets/pics/drawings/01_Skala.png?url";

import ButtonBackToTrail from "../utils/ButtonBackToTrail";

export default function RegionInfo() {
  return (
    <>
      <div className="region-container">
        <div className="region-info scroll">
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
      </div>
      <ButtonBackToTrail />
      <img
        className="drawing-rock"
        src={rock1Drawing}
        alt="Rysunek skały Okiennik Wielki"
      ></img>
    </>
  );
}

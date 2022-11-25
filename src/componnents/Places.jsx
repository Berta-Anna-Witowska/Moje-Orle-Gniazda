import React, {useState} from "react";
import "../styles/elements/_places.scss";
import {places} from "../data/places";

export default function Places() {
  console.log(places);
  return (
    <div className="places-descriptions">
      {places.map((el) => {
        return (
          <div className="places">
            <h1 key={el.ID}>{el.name}</h1>
            <p>{el.description}</p>
            <ul>
              <h2>Więcej</h2>
              {el.links.map((el, idx) => (
                <li key={idx}>
                  <a href={el.link}>{el.name}</a>
                </li>
              ))}
            </ul>
            {/* <img src="src/assets/pics/background01.JPG"></img> */}
          </div>
        );
      })}
    </div>
  );
}

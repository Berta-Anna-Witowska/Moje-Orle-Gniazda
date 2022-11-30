import React, {useState, useEffect} from "react";
import "../styles/elements/_places.scss";
import {places} from "../data/places";
import {useParams} from "react-router-dom";
import ButtonBackToTrail from "../utils/ButtonBackToTrail";

export default function Places() {
  const {id} = useParams();
  console.log(id);
  const backgroundImage = places[id - 1].background;
  console.log(backgroundImage);
  return (
    <>
      <div className="places-descriptions">
        <div className="places-wrapper">
          <div className="places">
            <h1>{places[id - 1].name}</h1>
            <p>{places[id - 1].description}</p>
            <ul>
              <h2>Więcej</h2>
              {places[id - 1].links.map((el, idx) => (
                <li key={idx}>
                  <a href={el.link}>{el.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <div
          style={{
            height: 500,
            width: 700,
            backgroundImage,
            backgroundPosition: "contain",
            backgroundRepeat: "no-repeat",
            backgroundColor: "wheat",
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        ></div> */}
        <img
          className="drawing-rock"
          src=".\src\assets\pics\drawings\01_Skala.png"
          alt="Rysunek skały Okiennik Wielki"
        ></img>
        <ButtonBackToTrail />
      </div>
    </>
  );
}

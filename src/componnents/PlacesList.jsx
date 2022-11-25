import React, {useState} from "react";
import "../styles/elements/_places-list.scss";
import {places} from "../data/places";

export default function PlacesList() {
  return (
    <>
      <div className="places-list">
        <h1>Miejsca na szlaku</h1>
        <ol>
          {places.map((el) => {
            return <li key={el.ID}>{el.name}</li>;
          })}
        </ol>
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

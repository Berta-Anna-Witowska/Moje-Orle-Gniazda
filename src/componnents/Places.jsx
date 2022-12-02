import React, {useState, useEffect} from "react";
import "../styles/elements/_places.scss";
import {places} from "../data/places";
import {useParams} from "react-router-dom";
import ButtonBackToTrail from "../utils/ButtonBackToTrail";

export default function Places() {
  const {id} = useParams();

  const img = places[id - 1].img;
  return (
    <>
      <div className="places-descriptions">
        <div className="places-info scroll">
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
      <ButtonBackToTrail />
      <img
        className="drawing-place"
        src={img}
        alt="Rysunek miejsca"
        height="30%"
      ></img>
    </>
  );
}

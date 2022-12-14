import "../styles/elements/_places-list.scss";

import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import {places} from "../data/places";

import ButtonBackToTrail from "../utils/ButtonBackToTrail";

export default function PlacesList() {
  const navigate = useNavigate();

  const [id, setId] = useState(null);

  const handleClick = (id) => {
    setId(id);
    navigate(`/trailplacesdescriptions/${id}`);
  };

  return (
    <>
      <div className="places-list">
        <h1>Miejsca na szlaku</h1>
        <ol>
          {places.map((el) => {
            return (
              <li key={el.ID} onClick={() => handleClick(el.ID)}>
                {el.name}
              </li>
            );
          })}
        </ol>
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

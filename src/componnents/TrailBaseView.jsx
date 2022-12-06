import React, {useState} from "react";
import "../styles/elements/_baseView.scss";

import {places} from "../data/places";
import {useNavigate, Routes, Route, useParams} from "react-router-dom";

export default function TrailBaseView() {
  const [id, setId] = useState(null);

  const handleClick = (id) => {
    setId(id);
  };

  return (
    <div className="trail-baseView">
      <div style={{position: "relative"}}>
        <div className="trail-map-container">
          <img
            className="trail-map"
            src=".\src\assets\pics\Mapa_2.svg"
            alt="Rysunek skały Okiennik Wielki"
          ></img>
          {places.map((element) => {
            return (
              <div
                className="place-point"
                key={element.ID}
                onClick={() => handleClick(element.ID)}
              >
                {element.ID}
              </div>
            );
          })}
        </div>
        {id && <PlacePreview id={id} />}
      </div>
      <img
        className="drawing-rock"
        src=".\src\assets\pics\drawings\01_Skala.png"
        alt="Rysunek skały Okiennik Wielki"
      ></img>
    </div>
  );
}
export function PlacePreview({id}) {
  const navigate = useNavigate();

  const backgroundImage = places[id - 1].background;
  console.log(backgroundImage);
  return (
    <div
      className="place-circle"
      style={{
        position: "absolute",
        top: "0",
        right: "-600px",
        height: "200px",
        width: "200px",
      }}
    >
      <div className="half-circle-img" style={{backgroundImage}}></div>
      <h1>{places[id - 1].name}</h1>
      <h2 onClick={() => navigate(`/trailplacesdescriptions/${id}`)}>
        Więcej...
      </h2>
    </div>
  );
}

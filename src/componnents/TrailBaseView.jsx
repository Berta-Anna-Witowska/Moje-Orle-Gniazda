import "../styles/elements/_baseView.scss";

import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import {places} from "../data/places";

import TrailName from "../utils/TrailName";
import {Tooltip, Position} from "evergreen-ui";

export default function TrailBaseView() {
  const [id, setId] = useState(null);

  const handleClick = (id) => {
    setId(id);
  };

  return (
    <div className="trail-baseView">
      <TrailName />
      <div style={{position: "relative"}}>
        <div className="trail-map-container">
          <img
            className="trail-map"
            src=".\src\assets\pics\Mapa_3.svg"
            alt="Rysunek szlaku"
          ></img>
          {places.map((element) => {
            return (
              <Tooltip
                content={`${element.name}`}
                position={Position.RIGHT}
                key={element.ID}
              >
                <div
                  className={`place-point point-${element.ID}`}
                  onClick={() => handleClick(element.ID)}
                ></div>
              </Tooltip>
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

function PlacePreview({id}) {
  const navigate = useNavigate();

  const backgroundImage = places[id - 1].background;
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

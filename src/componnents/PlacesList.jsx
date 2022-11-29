import React, {useState} from "react";
import "../styles/elements/_places-list.scss";
import "../styles/settings/_colors.scss";

import ButtonBackToTrail from "../utils/ButtonBackToTrail";

import {places} from "../data/places";
import TrailBaseView from "./TrailBaseView";
import {useNavigate} from "react-router-dom";

export default function PlacesList() {
  const navigate = useNavigate();

  const [id, setId] = useState(null);

  const handleClick = (id) => {
    console.log(id);
    setId(id);
    navigate("/trailplacesdescriptions:id");
  };

  // <div>
  //   <div>
  //     {testArray.map((element) => {
  //       return (
  //         <div onClick={() => handleClick(element.id)}>
  //           {element.id} , {element.text}
  //         </div>
  //       );
  //     })}
  //   </div>
  //   {id && <View id={id} />}
  // </div>;

  return (
    <>
      <div className="places-list">
        <h1>Miejsca na szlaku</h1>
        <ol>
          {places.map((el) => {
            return (
              <li key={el.ID} onClick={handleClick}>
                {el.name}
              </li>
            );
          })}
          {/* {id && <View id={id} />} */}
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

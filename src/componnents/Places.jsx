import React, {useState, useEffect, useParams} from "react";
import "../styles/elements/_places.scss";
import {places} from "../data/places";

export default function Places() {
  // const {id2} = useParams();
  // console.log(id2);

  // const newID = places.map((el, idx) => el.ID);
  // console.log(newID);

  // const [id, setId] = useState();

  // const fetchSnippet = async (id) => {
  //   let { data: snippets, error } = await supabase
  //     .from('snippets')
  //     .select("*")
  //     .eq('id', id);

  //   if (!error) {
  //     setEditorValue(JSON.parse(snippets[0].snippet));
  //   }
  // }

  // useEffect(() => {
  //   if (id) {
  //     fetchSnippet(id);
  //   } else {
  //     setEditorValue("// some comment");
  //   }
  // }, []);

  return (
    <div className="places-descriptions">
      {/* {id2 && (
        <div id={id2}>
          <h1>{places[id2 - 1].name}</h1>
        </div>
      )} */}

      {/* <div className="places-wrapper">
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
        <img
          className="drawing-place"
          src=".\src\assets\pics\drawings\01_Skala.png"
          alt="Rysunek skały Okiennik Wielki"
        ></img>
      </div> */}

      {/* 
      {places.map((el) => {
        return (
          <div key={el.ID} className="places-wrapper">
            <div className="places">
              <h1>{el.name}</h1>
              <p>{el.description}</p>
              <ul>
                <h2>Więcej</h2>
                {el.links.map((el, idx) => (
                  <li key={idx}>
                    <a href={el.link}>{el.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <img
              className="drawing-place"
              src=".\src\assets\pics\drawings\01_Skala.png"
              alt="Rysunek skały Okiennik Wielki"
            ></img>
          </div>
        );
      })} */}
    </div>
  );
}

import "../styles/elements/_places.scss";

import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import supabase from "../services/supabase";

import {places} from "../data/places";

import ButtonBackToTrail from "../utils/ButtonBackToTrail";
import {toaster, Tooltip, Position, Paragraph} from "evergreen-ui";

export default function Places() {
  const {id} = useParams();

  const [isLogged, setIsLogged] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const isUserLogged = async () => {
      const {
        data: {user},
      } = await supabase.auth.getUser();
      if (!user) {
        setIsLogged(false);
        return;
      }
      setIsLogged(true);
      setUserId(user.id);
    };
    isUserLogged();
  }, []);

  //Dodawanie do listy 'to visit'
  const [isChecked, setIsChecked] = useState("");

  const name = places[id - 1].name;
  const place_id = places[id - 1].ID;

  useEffect(() => {
    const isPlaceAdded = async () => {
      const {data, error} = await supabase
        .from("placesToVisit")
        .select()
        .eq("user_id", userId)
        .eq("name", name);

      if (!data[0]) {
        setIsChecked("fa-regular fa-star");
        return;
      } else if (data[0].name && data[0].name === name) {
        setIsChecked("fa-solid fa-star");
        return;
      }
      console.log(isChecked);
    };
    if (isLogged) {
      isPlaceAdded();
    }
    isPlaceAdded();
  }, [isLogged]);

  const addToPlacesToVisit = async () => {
    if (isChecked === "fa-regular fa-star") {
      const {data, error} = await supabase
        .from("placesToVisit")
        .insert([{user_id: userId, name: name, place_id: place_id}]);
      setIsChecked("fa-solid fa-star");
      toaster.success("Dodano do listy!");
      return;
    }

    const {data, error} = await supabase
      .from("placesToVisit")
      .delete()
      .eq("user_id", userId)
      .eq("name", name);
    setIsChecked("fa-regular fa-star");
    toaster.notify("Usunięto z listy!");

    if (error) {
      toaster.danger("Coś poszło nie tak!");
    }
  };

  const img = places[id - 1].img;
  console.log(places[id - 1].name);
  return (
    <>
      <div className="places-descriptions">
        <div className="places-info scroll">
          <h1>{places[id - 1].name}</h1>
          {isLogged && (
            <Tooltip content="Chcesz odwiedzić?" position={Position.RIGHT}>
              <span>
                <i className={isChecked} onClick={addToPlacesToVisit}></i>
              </span>
            </Tooltip>
          )}
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
        alt={`Rysunek ${places[id - 1].name}`}
        height="30%"
      ></img>
    </>
  );
}

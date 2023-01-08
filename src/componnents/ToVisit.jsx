import "../styles/elements/_to-visit.scss";

import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import supabase from "../services/supabase";

import rock1Drawing from "../assets/pics/drawings/01_Skala.png?url";

import ButtonBackToTrail from "../utils/ButtonBackToTrail";
import {toaster, Tooltip, Position} from "evergreen-ui";

export default function ToVisit() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const isUserLogged = async () => {
      const {
        data: {user},
      } = await supabase.auth.getUser();
      if (!user) {
        toaster.notify(
          "Jesteś niezalogowany. Jeśli chcesz zobaczyć więcej przejdź do logowania."
        );
        navigate("/");
        return;
      }
      setUserId(user.id);
      setIsLogged(true);
    };
    isUserLogged();
  }, []);

  const [placesList, setPlacesList] = useState(null);
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      let {data: placesToVisit, error} = await supabase
        .from("placesToVisit")
        .select("*")
        .eq("user_id", userId);

      if (!error) {
        setPlacesList(placesToVisit);
      }
    };

    if (isLogged) {
      fetchPost();
    }
  }, [isLogged]);

  // const removeFromPlacesToVisit = async (i) => {
  //   const name = placesList[i].name;

  //   const {data, error} = await supabase
  //     .from("placesToVisit")
  //     .delete()
  //     .eq("user_id", userId)
  //     .eq("name", name);
  //   toaster.notify("Usunięto z listy!");
  //   setIsChecked(false);

  //   console.log(data.placesToVisit);

  //   if (error) {
  //     toaster.danger("Coś poszło nie tak!");
  //   }
  // };

  return (
    <>
      <div className="places-toVisit">
        <h1>Chcę odwiedzić</h1>
        <ul>
          {placesList &&
            placesList.map((el, idx) => (
              <span className="to-visit-place" key={el.place_id}>
                <span>
                  {/* <Tooltip
                    content="Chcesz odwiedzić?"
                    position={Position.RIGHT}
                  >
                    <i
                      className="fa-solid fa-star"
                      onClick={removeFromPlacesToVisit(idx)}
                    ></i>
                  </Tooltip> */}

                  <li
                    onClick={() =>
                      navigate(`/trailplacesdescriptions/${el.place_id}`)
                    }
                  >
                    {el.name}
                  </li>
                </span>
              </span>
            ))}
        </ul>
      </div>
      <ButtonBackToTrail />
      <img
        className="drawing-rock"
        src={rock1Drawing}
        alt="Rysunek skały Okiennik Wielki"
      ></img>
    </>
  );
}

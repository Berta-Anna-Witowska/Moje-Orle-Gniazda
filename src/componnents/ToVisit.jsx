import "../styles/elements/_to-visit.scss";

import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import supabase from "../services/supabase";

import ButtonBackToTrail from "../utils/ButtonBackToTrail";
import {toaster} from "evergreen-ui";

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
  return (
    <>
      <div className="places-toVisit">
        <h1>Chcę odwiedzić</h1>
        <ul>
          {placesList &&
            placesList.map((el) => (
              <li
                className="to-visit-place"
                key={el.place_id}
                onClick={() =>
                  navigate(`/trailplacesdescriptions/${el.place_id}`)
                }
              >
                {el.name}
              </li>
            ))}
        </ul>
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

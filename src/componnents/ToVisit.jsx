import "../styles/elements/_to-visit.scss";
import ButtonBackToTrail from "../utils/ButtonBackToTrail";
import {useNavigate} from "react-router-dom";
import React, {useState, useEffect} from "react";
import supabase from "../services/supabase";
import {toaster} from "evergreen-ui";
import {places} from "../data/places";

// toaster.notify("oops...");
// toaster.warning("no!");
// toaster.danger("Look out!");
// toaster.success("Great!");

export default function ToVisit() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);

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
      setIsLogged(true);
    };
    isUserLogged();
  }, []);

  // let { data: placesToVisit, error } = await supabase
  // .from('placesToVisit')
  // .select('*')

  const [placesList, setPlacesList] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      let {data: placesToVisit, error} = await supabase
        .from("placesToVisit")
        .select("*");

      if (!error) {
        setPlacesList(placesToVisit);
      }
    };

    fetchPost();
  }, []);

  return (
    <>
      <div className="places-toVisit">
        <h1>Chcę odwiedzić</h1>
        <ul>
          {placesList &&
            placesList.map((e) => (
              <li onClick={() => navigate("/traillistofplaces")}> {e.name}</li>
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

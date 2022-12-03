import "../styles/elements/_to-visit.scss";
import ButtonBackToTrail from "../utils/ButtonBackToTrail";
import {useNavigate} from "react-router-dom";
import React, {useState, useEffect} from "react";
import supabase from "../services/supabase";
import {toaster} from "evergreen-ui";

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
  return (
    <>
      <div className="places-toVisit">
        <h1>Chcę odwiedzić</h1>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
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

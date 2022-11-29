import "../styles/elements/_gallery.scss";
import ButtonBackToTrail from "../utils/ButtonBackToTrail";
import {useNavigate} from "react-router-dom";
import React, {useState, useEffect} from "react";
import supabase from "../services/supabase";
import {toaster} from "evergreen-ui";

export default function Trips() {
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
    <div className="gallery">
      <h1>Moje wycieczki</h1>
      <div className="gallery-div"></div>
      <ButtonBackToTrail />
    </div>
  );
}

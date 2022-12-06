import "../styles/elements/_my-trips.scss";
import ButtonBackToTrail from "../utils/ButtonBackToTrail";
import {useNavigate} from "react-router-dom";
import React, {useState, useEffect} from "react";
import supabase from "../services/supabase";
import {toaster} from "evergreen-ui";

export default function MyTripsInfoPage() {
  return (
    <section className="my-trips-info">
      <h2>Witaj w aplikacji Moje Orle Gniazda</h2>
      <p>
        Tu możesz dodawać opisy swoich wycieczek, wędrówek po szlaku, notatki z
        wypraw. Żeby dodać nową kliknij przycisk +.
        <br />
        Dodane opisy będą dostępne w zakładce "moje teksty".
      </p>
    </section>
  );
}

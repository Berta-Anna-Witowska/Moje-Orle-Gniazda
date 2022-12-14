import "../styles/elements/_my-trips.scss";

import React from "react";

export default function MyTripsInfoPage() {
  return (
    <section className="my-trips-info">
      <h1>Zapiski z podróży</h1>
      <h2>Witaj w aplikacji Moje Orle Gniazda</h2>
      <p>
        Tu możesz dodawać opisy swoich wycieczek, wędrówek po szlaku, notatki
        z&nbsp;wypraw. <br /> Żeby dodać nową notatkę kliknij przycisk&nbsp;
        <i className="fa-solid fa-plus" style={{fontSize: "1em"}}></i>
        <br />
        Dodane opisy będą dostępne w zakładce "Moje notatki".
      </p>
    </section>
  );
}

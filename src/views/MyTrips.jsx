import "../styles/elements/_my-trips.scss";
import ButtonBackToTrail from "../utils/ButtonBackToTrail";
import {useNavigate} from "react-router-dom";
import React, {useState, useEffect} from "react";
import supabase from "../services/supabase";
import {toaster} from "evergreen-ui";

export default function MyTrips() {
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
    <div className="my-trips">
      <h1>Moje Orle Gniazda</h1>
      <div className="my-trips-container">
        <button className="add-new-description">Nowy post</button>
        <section className="my-trips-list">
          <ul>
            Moje teksty
            <li>trip1</li> <li>trip2</li>
            <li>trip3</li>
            <li>trip4</li>
          </ul>
        </section>
        <section className="my-trips-sescription">
          <h2>Tytuł</h2>
          <h3>Miejsce</h3>
          <p>
            Opis miejsca. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Unde accusantium earum possimus nihil accusamus, veritatis
            fugit autem hic illum officia iste magnam numquam, commodi
            voluptates! Quod earum esse iste nihil repellendus aut perferendis
            doloremque ducimus error maiores. Nemo voluptas, voluptatum ab
            officia iure illum aliquam eaque omnis enim. Debitis ratione eius
            assumenda accusamus nihil aut vel cum, exercitationem et maiores sit
            eos ullam laboriosam quam suscipit, dolor autem perspiciatis tenetur
            cumque iure voluptate consequuntur perferendis consequatur! Illum
            beatae accusamus eaque reiciendis soluta. Sunt unde eum odit aliquid
            laudantium obcaecati necessitatibus corporis quod voluptatem, amet
            pariatur, error ullam aspernatur earum. Suscipit!
          </p>
        </section>

        <form className="my-trips-form">
          <input placeholder="tytuł"></input>
          <input placeholder="miejsce"></input>
          <textarea
            placeholder="Miejsce na twoje notatki..."
            rows="8"
          ></textarea>
          <button>Dodaj wpis</button>
        </form>
      </div>
      <ButtonBackToTrail />
    </div>
  );
}

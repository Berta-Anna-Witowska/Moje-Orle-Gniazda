import React, {useState, useEffect} from "react";
import "../styles/elements/_places.scss";
import {places} from "../data/places";
import {useParams} from "react-router-dom";
import ButtonBackToTrail from "../utils/ButtonBackToTrail";
import supabase from "../services/supabase";
import {toaster} from "evergreen-ui";

export default function Places() {
  const {id} = useParams();

  const [isLogged, setIsLogged] = useState(false);

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
    };
    isUserLogged();
  }, []);

  const [isChecked, setIsChecked] = useState("fa-regular fa-star");

  // sprawdzić czy miejsce jest w bazie danych, jęśli nie to ustawić na   useState("fa-regular fa-star"), hjęsli nie to na fa-solid
  // useEffect(() => {
  //   setCurrentIndex(0);
  // }, [idx]);

  const addToPlacesToVisit = async () => {
    const name = places[id - 1].name;
    if (isChecked === "fa-regular fa-star") {
      setIsChecked("fa-solid fa-star");
      console.log(name);

      const {data, error} = await supabase
        .from("placesToVisit")
        .insert([{name: name}]);
      return;
    }
    setIsChecked("fa-regular fa-star");

    const {data, error} = await supabase
      .from("placesToVisit")
      .delete()
      .eq("name", name);
    console.log("usunięto");

    if (error) {
      console.log(error);
      toaster.warning("Dodawanie nie powiodło się!");
    }
    toaster.success("Zmiany zostały zapisane!");
  };
  // const addPost = async (e) => {
  //   const [title, localization, description] = e.target.elements;

  //   const {data, error} = await supabase.from("post").insert([
  //     {
  //       title: title.value,
  //       localization: localization.value,
  //       description: description.value,
  //     },
  //   ]);
  //   if (error) {
  //     console.log(error);
  //     toaster.warning("Dodawanie nie powiodło się!");
  //   }
  //   toaster.success("Zmiany zostały zapisane!");
  //   e.target.reset();
  // };

  const img = places[id - 1].img;
  return (
    <>
      <div className="places-descriptions">
        <div className="places-info scroll">
          <h1>{places[id - 1].name}</h1>
          {isLogged && (
            <span>
              <i className={isChecked} onClick={addToPlacesToVisit}></i>
              {/* <i className="fa-regular fa-star"></i> */}
            </span>
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
        alt="Rysunek miejsca"
        height="30%"
      ></img>
    </>
  );
}

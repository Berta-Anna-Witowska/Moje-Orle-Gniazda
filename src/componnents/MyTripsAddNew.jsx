import "../styles/elements/_my-trips.scss";
import {useNavigate} from "react-router-dom";
import React, {useState, useEffect, useRef} from "react";
import supabase from "../services/supabase";
import {toaster} from "evergreen-ui";

export default function MyTripsAddNew() {
  const addPost = async (e) => {
    const [title, localization, description] = e.target.elements;

    const {data, error} = await supabase.from("post").insert([
      {
        title: title.value,
        localization: localization.value,
        description: description.value,
      },
    ]);
    if (error) {
      console.log(error);
      toaster.warning("Dodawanie nie powiodło się!");
    }
    toaster.success("Zmiany zostały zapisane!");
    e.target.reset();
  };

  return (
    <section className="my-trips-add_new">
      <form className="my-trips-form" onSubmit={(e) => addPost(e)}>
        <input type="text" name="title" placeholder="Tytuł"></input>
        <input
          type="text"
          name="localization"
          placeholder="Lokalizacja"
        ></input>
        <textarea
          type="text"
          name="description"
          placeholder="Miejsce na twoje notatki..."
          rows="8"
        ></textarea>
        <button
          className="circle-medium"
          type="submit"
          value="Send"
          label="Send"
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </section>
  );
}

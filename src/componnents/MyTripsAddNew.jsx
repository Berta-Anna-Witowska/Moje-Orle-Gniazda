import "../styles/elements/_my-trips.scss";

import React, {useState, useEffect} from "react";
import supabase from "../services/supabase";

import {toaster, Tooltip, Position} from "evergreen-ui";

export default function MyTripsAddNew() {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const getUserId = async () => {
      const {
        data: {user},
      } = await supabase.auth.getUser();
      if (!user) {
        toaster.danger("Coś poszło nie tak!");
        return;
      }
      setUserId(user.id);
    };
    getUserId();
  }, []);

  const addPost = async (e) => {
    e.preventDefault();

    const [title, localization, description] = e.target.elements;

    const {data, error} = await supabase.from("post").insert([
      {
        user_id: userId,
        title: title.value,
        localization: localization.value,
        description: description.value,
      },
    ]);
    if (error) {
      toaster.danger("Dodawanie nie powiodło się!");
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
          placeholder="Miejsce na Twoje notatki..."
          rows="8"
        ></textarea>
        <Tooltip content="Dodaj notatkę" position={Position.RIGHT}>
          <button
            className="circle-medium"
            type="submit"
            value="Send"
            label="Send"
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </Tooltip>
      </form>
    </section>
  );
}

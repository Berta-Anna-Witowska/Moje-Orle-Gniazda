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

    if (title.value.length < 3) {
      toaster.warning("Tytuł musi składać się z co najmniej 3 znaków.");
      return;
    }
    if (localization.value.length < 5) {
      toaster.warning(
        "Nazwa lokalizacji musi składać się z co najmniej 5 znaków."
      );
      return;
    }
    if (description.value.length < 10) {
      toaster.warning("Notatka musi składać się z co najmniej 10 znaków.");
      return;
    }

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
        <input type="text" name="title" placeholder="Tytuł" required></input>
        <input
          type="text"
          name="localization"
          placeholder="Lokalizacja"
          required
        ></input>
        <textarea
          type="text"
          name="description"
          placeholder="Miejsce na Twoje notatki..."
          rows="8"
          required
        ></textarea>
        <Tooltip content="Dodaj notatkę" position={Position.RIGHT}>
          <button
            className="circle-medium"
            name="send"
            type="submit"
            value="Submit"
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </Tooltip>
      </form>
    </section>
  );
}

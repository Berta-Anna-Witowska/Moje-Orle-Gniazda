import "../styles/elements/_my-trips.scss";

import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import supabase from "../services/supabase";

import {toaster, Tooltip, Position} from "evergreen-ui";

export default function MyTripsShowTrip() {
  const {id} = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      let {data: post, error} = await supabase
        .from("post")
        .select("*")
        .eq("id", id);

      if (!error) {
        setPost(post);
      }
      if (error) {
        toaster.danger("Coś poszło nie tak!");
      }
    };

    fetchPost();
  }, [id]);

  const removePost = async (title) => {
    try {
      const {data, error} = await supabase
        .from("post")
        .delete()
        .eq("title", title);

      setPost(post.filter((post) => post.title != title));
      toaster.notify("Wpis usunięto!");
      navigate("/mytrips/info");
    } catch (error) {
      toaster.danger("Coś poszło nie tak!");
    }
  };

  return (
    <>
      {post &&
        post.map((el) => (
          <section className="my-trips-description" key={el.id}>
            <h2>{el.title}</h2>
            <h3>{el.localization}</h3>
            <p>{el.description}</p>
            <Tooltip content="Usuń wpis" position={Position.RIGHT}>
              <button
                className="circle-medium"
                type="remove"
                value="Remove"
                label="Remove"
                onClick={() => removePost(el.title)}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
            </Tooltip>
          </section>
        ))}
    </>
  );
}

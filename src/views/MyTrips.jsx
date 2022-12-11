import "../styles/elements/_my-trips.scss";

import React, {useState, useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import supabase from "../services/supabase";

import ButtonBackToTrail from "../utils/ButtonBackToTrail";
import Footer from "../componnents/Footer";

import {toaster, Tooltip} from "evergreen-ui";

export default function MyTrips() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const [userId, setUserId] = useState("");

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
      setUserId(user.id);
      // console.log(user.id);
      // console.log(userId);
    };
    isUserLogged();
  }, []);

  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      let {data: post, error} = await supabase
        .from("post")
        .select("*")
        .eq("user_id", userId);

      if (!error) {
        setPost(post);
      }
    };
    fetchPost();
  }, [post]);

  return (
    <>
      <div className="my-trips-app">
        <h1 className="app-name">Moje Orle Gniazda</h1>
        <div className="my-trips">
          <section className="my-trips-sidebar">
            <Tooltip content="Nowy wpis">
              <button
                className="add-new-description circle"
                onClick={() => navigate("/mytrips/addnew")}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </Tooltip>

            <ul className="my-trips-list" style={{marginBottom: 30}}>
              <h1>Moje notatki</h1>

              {post &&
                post.map((el) => (
                  <li
                    key={el.id}
                    title={`Post#${el.id}`}
                    onClick={() => {
                      navigate(`/mytrips/post/${el.id}`);
                    }}
                  >
                    {el.title}
                  </li>
                ))}
            </ul>
          </section>
          <section className="mi-trips-container">
            <Outlet />
          </section>

          <ButtonBackToTrail />
        </div>
      </div>
      <Footer />
    </>
  );
}

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
                name="new"
                type="button"
                value="New"
                onClick={() => navigate("/mytrips/addnew")}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </Tooltip>
            <div className="my-trips-list">
              <h1>Moje notatki</h1>
              <ul>
                {post &&
                  post.map((el) => (
                    <li
                      key={el.id}
                      onClick={() => {
                        navigate(`/mytrips/post/${el.id}`);
                      }}
                    >
                      &#8226; {el.title}
                    </li>
                  ))}
              </ul>
            </div>
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

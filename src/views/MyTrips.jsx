import React, {useState, useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import supabase from "../services/supabase";

import ButtonBackToTrail from "../utils/ButtonBackToTrail";
import MyTripsInfoPage from "../componnents/MyTripsInfoPage";
import MyTripsAddNew from "../componnents/MyTripsAddNew";
import Footer from "../componnents/Footer";

import {toaster} from "evergreen-ui";
import "../styles/elements/_my-trips.scss";

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

  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      let {data: post, error} = await supabase.from("post").select("*");

      if (!error) {
        setPost(post);
      }
    };

    fetchPost();
  }, []);

  // const {currID, setCurrID} = useState(null)

  const showPost = () => {
    navigate(`/mytrips/post/${el.id}`);
    location.reload();
    return;
  };

  return (
    <>
      <div className="my-trips-app">
        <h1 className="app-name">Moje Orle Gniazda</h1>
        <div className="my-trips">
          <section className="my-trips-sidebar">
            <button
              className="add-new-description circle"
              onClick={() => navigate("/mytrips/addnew")}
            >
              <i className="fa-solid fa-plus"></i>
            </button>

            <ul className="my-trips-list" style={{marginBottom: 30}}>
              <h1>Moje teksty</h1>

              {post &&
                post.map((el) => (
                  <li
                    key={el.id}
                    title={`Post#${el.id}`}
                    onClick={() => navigate(`/mytrips/post/${el.id}`)}
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

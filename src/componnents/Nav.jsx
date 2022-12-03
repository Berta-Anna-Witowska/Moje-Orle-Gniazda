import React, {useState, useEffect} from "react";
import "../styles/elements/_nav.scss";
import {useNavigate} from "react-router-dom";
import supabase from "../services/supabase";

export default function Nav({isUserLogged}) {
  const navigate = useNavigate();

  return (
    <>
      <nav className="nav ">
        <div className="half-circle-top" onClick={() => navigate("/gallery")}>
          <i className="fa-regular fa-image" />
        </div>
        {isUserLogged === true && (
          <div className="half-circle-top" onClick={() => navigate("/mytrips")}>
            <i className="fa-regular fa-pen-to-square" />
          </div>
        )}
        <div
          className="half-circle-top"
          onClick={
            isUserLogged
              ? () => navigate("/signout")
              : () => navigate("/signin")
          }
        >
          <i className="fa-solid fa-user" />
        </div>
        {isUserLogged === true && (
          <div className="half-circle-top" onClick={() => navigate("/tovisit")}>
            <i className="fa-regular fa-star" />
          </div>
        )}
        <div className="half-circle-top" onClick={() => navigate("/contact")}>
          <i className="fa-regular fa-envelope" />
        </div>
      </nav>
    </>
  );
}

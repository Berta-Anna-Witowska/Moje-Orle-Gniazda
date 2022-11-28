import React from "react";
import "../styles/elements/_nav.scss";
import {useNavigate} from "react-router-dom";

export default function Nav(isLogged) {
  const navigate = useNavigate();

  return (
    <>
      <nav className="nav ">
        <div className="half-circle-top" onClick={() => navigate("/gallery")}>
          <i className="fa-regular fa-image" />
        </div>
        {isLogged === true && (
          <div
            className="half-circle-top"
            onClick={() => navigate("/trailbaseview")}
          >
            <i class="fa-regular fa-pen-to-square" />
          </div>
        )}
        <div className="half-circle-top" onClick={() => navigate("/signin")}>
          <i className="fa-solid fa-user" />
        </div>
        {isLogged === true && (
          <div
            className="half-circle-top"
            onClick={() => navigate("/trailbaseview")}
          >
            <i class="fa-regular fa-star" />
          </div>
        )}
        <div className="half-circle-top" onClick={() => navigate("/contact")}>
          <i className="fa-regular fa-envelope" />
        </div>
      </nav>
    </>
  );
}

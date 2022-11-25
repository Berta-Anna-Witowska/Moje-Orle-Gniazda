import React from "react";
import "../styles/elements/_nav.scss";
import {useNavigate} from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();

  return (
    <nav className="nav ">
      <a className="half-circle-top" onClick={() => navigate("/gallery")}>
        <i className="fa-regular fa-image" />
      </a>
      <a className="half-circle-top" onClick={() => navigate("/signin")}>
        <i className="fa-solid fa-user" />
      </a>
      <a className="half-circle-top" onClick={() => navigate("/contact")}>
        <i className="fa-regular fa-envelope" />
      </a>
    </nav>
  );
}

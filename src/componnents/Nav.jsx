import React from "react";
import "../scss/elements/_nav.scss";

export default function Nav() {
  return (
    <nav className="nav ">
      <a className="half-circle-top">
        <i className="fa-regular fa-image" />
      </a>
      <a className="half-circle-top">
        <i className="fa-solid fa-user" />
      </a>
      <a className="half-circle-top">
        <i className="fa-regular fa-envelope" />
      </a>
    </nav>
  );
}

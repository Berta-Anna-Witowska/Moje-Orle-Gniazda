import React from "react";
import "../styles/elements/_nav.scss";
import {useNavigate} from "react-router-dom";
import {Tooltip} from "evergreen-ui";

export default function Nav({isUserLogged}) {
  const navigate = useNavigate();

  return (
    <>
      <nav className="nav ">
        <Tooltip content="Galeria zdjęć">
          <div className="half-circle-top" onClick={() => navigate("/gallery")}>
            <i className="fa-regular fa-image" />
          </div>
        </Tooltip>
        {isUserLogged === true && (
          <Tooltip content="Zapiski z podróży">
            <div
              className="half-circle-top"
              onClick={() => navigate("/mytrips/info")}
            >
              <i className="fa-regular fa-pen-to-square" />
            </div>
          </Tooltip>
        )}
        <Tooltip content="Logowanie">
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
        </Tooltip>
        {isUserLogged === true && (
          <Tooltip content="Miejsca do odwiedzenia">
            <div
              className="half-circle-top"
              onClick={() => navigate("/tovisit")}
            >
              <i className="fa-regular fa-star" />
            </div>
          </Tooltip>
        )}
        <Tooltip content="Kontakt">
          <div className="half-circle-top" onClick={() => navigate("/contact")}>
            <i className="fa-regular fa-envelope" />
          </div>
        </Tooltip>
      </nav>
    </>
  );
}

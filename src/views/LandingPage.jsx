import "../styles/elements/_landing-page.scss";

import {Outlet, useNavigate} from "react-router-dom";

import rock1Drawing from "../assets/pics/drawings/01_Skala.png?url";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-page-header">
        <h1>Moje Orle Gniazda</h1>
        <div className="landing-page-buttons">
          <button className="circle" onClick={() => navigate("/signin")}>
            Zaloguj
          </button>
          <button className="circle" onClick={() => navigate("/trailbaseview")}>
            Eksploruj
          </button>
        </div>
      </div>
      <img
        className="drawing-rock"
        src={rock1Drawing}
        alt="Rysunek skały Okiennik Wielki"
        height="50%"
      ></img>

      <Outlet />
    </div>
  );
}

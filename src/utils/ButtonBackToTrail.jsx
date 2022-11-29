import React from "react";
import {useNavigate} from "react-router-dom";

export default function ButtonBackToTrail() {
  const navigate = useNavigate();
  return (
    <div
      className="button-bactotrail"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        top: 50,
        right: 50,
      }}
    >
      <button
        label="Signup"
        className="circle"
        style={{
          width: 50,
          height: 50,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "5px",
        }}
        onClick={() => navigate("/trailbaseview")}
      >
        <i className="fa-solid fa-route"></i>
      </button>
      <span style={{textTransform: "uppercase", textAlign: "center"}}>
        Wróć
        <br />
        na szlak
      </span>
    </div>
  );
}

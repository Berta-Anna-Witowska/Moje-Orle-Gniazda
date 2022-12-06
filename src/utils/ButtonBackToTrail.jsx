import React from "react";
import {useNavigate} from "react-router-dom";

export default function ButtonBackToTrail() {
  const navigate = useNavigate();
  return (
    <div className="button-bactotrail" style={{}}>
      <button
        label="Signup"
        className="circle-medium"
        style={{
          marginBottom: "5px",
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
          position: "absolute",
          top: 50,
          right: 50,
        }}
        onClick={() => navigate("/trailbaseview")}
      >
        <i className="fa-solid fa-route"></i>
      </button>
    </div>
  );
}

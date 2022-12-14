import React from "react";
import {useNavigate} from "react-router-dom";

import {Tooltip} from "evergreen-ui";

export default function ButtonBackToTrail() {
  const navigate = useNavigate();
  return (
    <div className="button-bactotrail" style={{}}>
      <Tooltip content="Widok szlaku">
        <button
          label="Signup"
          className="circle-medium"
          style={{
            marginBottom: "5px",
            position: "absolute",
            top: 50,
            right: 50,
          }}
          onClick={() => navigate("/trailbaseview")}
        >
          <i className="fa-solid fa-route"></i>
        </button>
      </Tooltip>
    </div>
  );
}

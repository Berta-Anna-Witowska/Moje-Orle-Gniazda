import React, {useState} from "react";
import "../styles/elements/_sidebar.scss";
import "../styles/elements/_baseView.scss";
import "../styles/settings/_colors.scss";

// import {useRef} from "react";
import {useNavigate} from "react-router-dom";

export default function SideBar() {
  const [style, setStyle] = useState({
    display: "none",
    position: "",
    top: "calc((50%) - (50px))",
    left: "",
    textShadow: "",
    boxShadow: "",
  });
  const showSideMenu = () => {
    setStyle({
      display: "flex",
      position: "relative",
      top: "calc((50%) - (150px))",
      left: "-150px",
    });
  };

  const showHighlight = () => {
    setStyle({
      textShadow: "5px 0px 10px rgba(206, 217, 230, 0.7)",
      boxShadow: "0px 0px 20px 0px rgba(206, 217, 230, 0.7)",
    });
  };

  const hideHighlight = () => {
    setStyle({textShadow: "", boxShadow: ""});
  };

  const navigate = useNavigate();

  const {display, position, top, left, textShadow, boxShadow} = style;
  return (
    <aside
      className="sidebar"
      onMouseEnter={showHighlight}
      onMouseLeave={hideHighlight}
      style={{top}}
    >
      <div className="half-circle-left" style={{boxShadow}}>
        <i className="fa-solid fa-info" />
      </div>
      <i
        className="fa-solid fa-chevron-right"
        onClick={showSideMenu}
        style={{textShadow}}
      />
      <div className="big-circle" style={{display, position, left}}>
        <div
          className="circle about-region"
          onClick={() => navigate("/trailregioninfo")}
        >
          O regionie
        </div>
        <div
          className="circle about-trail"
          onClick={() => navigate("/trailinfo")}
        >
          O szlaku
        </div>
        <div
          className="circle places-list"
          onClick={() => navigate("/traillistofplaces")}
        >
          Miejsca
          <br />
          na szlaku
        </div>
      </div>
    </aside>
  );
}

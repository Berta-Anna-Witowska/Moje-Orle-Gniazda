import React from "react";
import "../scss/elements/_sidebar.scss";
import "../scss/elements/_base.scss";
// import Places from "./componnents/Places";

function Main() {
  return <main className="main-container"></main>;
}

function SideBar() {
  return (
    <aside className="sidebar">
      <div className="half-circle-left">
        <i class="fa-solid fa-info" />
      </div>
      <i class="fa-solid fa-chevron-right" />
    </aside>
  );
}

export function MainSection() {
  return (
    <>
      <SideBar />
      <Main />
    </>
  );
}

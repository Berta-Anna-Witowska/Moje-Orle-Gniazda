import React, {useState} from "react";
import "./scss/App.scss";
import Nav from "./componnents/Nav";
import Footer from "./componnents/Footer";
import {MainSection} from "./componnents/MainSection";
function App() {
  return (
    <>
      <Nav />
      <MainSection />
      <Footer />
    </>
  );
}

export default App;

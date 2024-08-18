import logo from "./logo.svg";
import React from "react";

import Header from "./components/nav/header.js";
import AboutMe from "./components/section/aboutme.js";
import Experience from "./components/section/experience.js";
import Portofolio from "./components/section/portofolio.js";
import Contact from "./components/section/contact.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Experience/>
      <Portofolio/>
      <Contact/>
      <main>{/* Your landing page content */}</main>
    </div>
  );
}

export default App;

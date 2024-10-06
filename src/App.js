import logo from "./logo.svg";
import React from "react";

import Header from "./components/nav/nav.js";
import AboutMe from "./components/aboutMe/aboutme.js";
import Experience from "./components/experience/experience.js";
import Portofolio from "./components/portofolio/portofolio.js";
import Contact from "./components/contact/contact.js";

import "./style/App.css";
import "./components/nav/nav.css";
import "./components/aboutMe/aboutMe.css";
import "./components/contact/contact.css";
import "./components/experience/experience.css";
import "./components/portofolio/portofolio.css";


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

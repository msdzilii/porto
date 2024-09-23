import React from "react";
import myImage from '../../assets/Images/myImages.png';  // go up two directories
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const AboutMe = () => {
  return (
    <div>
      <section id= "aboutme" className="hero-section">
        <div className="hero-text">
          <h1>Hello</h1>
          <h2>
            I'm <span>Muhammad Mufid Sadzili</span>
          </h2>
          <p>
            This is Jems Kemerun, visual designer, Photographer, Web Developer
            and Creative Director located in United States, looking for working
            around the globe.
          </p>
          <button className="download-btn">Download CV</button>
        </div>
        <div className="hero-image">
          <img src={myImage} alt="Muhammad Mufid Sadzili" style={{ width: '450px', height: 'auto' }} />
        </div>
      </section>
    </div>
  );
};

export default AboutMe;

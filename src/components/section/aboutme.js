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
          As a Fresh Graduate from the Department of Computer Science, University of Lampung, I have the ability to work diligently, disciplined and collaboratively in a team. 
          I am committed to continuing to develop in order to increase my potential. 
          I specialize as a Systems Analyst with an interest in UI/UX design and Web Developer.
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

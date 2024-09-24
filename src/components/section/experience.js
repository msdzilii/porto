import React from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { flexbox } from "@chakra-ui/react";

const Experience = () => {
  return (
    <div>
      <section id="experience" className="experience-section">
        <h1>Experience</h1>

        <div className="experience-body-section">
          <div className="experience-text">
            <h2>Trainer (Teaching Assistant)</h2>
            <h3>University Of Lampung</h3>
            <p>
              Provides instruction to students during lectures and assigns
              projects, explains concepts and assists with problem solving. Work
              together with other teaching assistant members to prepare learning
              materials, assignments and assessments. Provides assessment of
              assignments, exams and projects and ensures fair and consistent
              evaluation of student performance.
            </p>
            <ul>
              <li>• Design Analysis and Information Systems</li>
              <li>• Data Communications and Computer Networks</li>
              <li>• Pattern Recognition</li>
            </ul>
          </div>
          <div>
            <h3>Aug 2022 - Des 2023</h3>
          </div>
        </div>

        <div className="experience-body-section">
          <div className="experience-text">
            <h2>Frontend developer dan Web Developer Intern </h2>
            <h3>PT Bank Pembangunan Daerah Lampung</h3>
            <p>
              Bank Lampung is a regional bank operating in Lampung Province.
              This bank was established to support regional development and
              serve the financial needs of the people of Lampung.
            </p>
            <ul>
              <li>•	Building a training and education system (SiPendik) for Bank Lampung using CodeIgniter 4</li>
              <li>• Developing the SiPendik frontend developer</li>
              <li>•	Collaborating with Bank Lampung human capital staff to build SiPendik</li>
              <li>•	Assisting company operations, especially in the Operations Center division.</li>
            </ul>
          </div>
          <div>
            <h3>Des 2022 - Feb 2023</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;

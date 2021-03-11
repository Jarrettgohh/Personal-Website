import React from "react";

import NavbarComponent from "./components/navbarComponent";
import AboutMyself from "./components/aboutMyself";
import ProgrammingProjects from "./components/programmingProjects";
import TechStack from "./components/techStack";
import FutureProjectIdeas from "./components/futureProjectIdeas";
import SkillsLearnt from "./components/skillsLearnt";
import Certifications from "./components/certifications";
import Citations from "./components/citations";

import "./css/main.css";

function App() {
  return (
    <React.Fragment>
      {/* Navbar Component */}
      <NavbarComponent />

      {/* ABOUT MYSELF */}
      <AboutMyself />

      {/* PROGRAMMING PROJECTS */}
      <ProgrammingProjects />

      {/* TECHSTACK*/}
      <TechStack />

      {/* FUTURE PROJECT IDEAS */}
      <FutureProjectIdeas />

      {/* Skills Learnt */}
      <SkillsLearnt />

      {/* CERTIFICATIONS */}
      <Certifications />

      {/* Citations */}
      <Citations />
    </React.Fragment>
  );
}

export default App;

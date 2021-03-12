import React from "react";

import NavbarComponent from "./navbarComponent";
import AboutMyself from "./aboutMyself";
import ProgrammingProjects from "./programmingProjects";
import TechStack from "./techStack";
import FutureProjectIdeas from "./futureProjectIdeas";
import SkillsLearnt from "./skillsLearnt";
import Certifications from "./certifications";
import Citations from "./citations";

const MainPage = () => {
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
};

export default MainPage;

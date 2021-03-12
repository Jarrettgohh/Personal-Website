import React from "react";

import AboutMyself from "./aboutMyself";
import ProgrammingProjects from "./programmingProjects";
import TechStack from "./techStack";
import FutureProjectIdeas from "./futureProjectIdeas";
import SkillsLearnt from "./skillsLearnt";
import Certifications from "./certifications";
import Citations from "./citations";

const MainPage = () => {
  return (
    <>
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
    </>
  );
};

export default MainPage;

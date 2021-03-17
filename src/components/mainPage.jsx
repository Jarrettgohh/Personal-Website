import React from "react";

import AboutThisWebsite from "./main/aboutThisWebsite";
import AboutMyself from "./main/aboutMyself";
import ProgrammingProjects from "./main/programmingProjects";
// import TechStack from "./main/techStack";
// import FutureProjectIdeas from "./main/futureProjectIdeas";
import SkillsLearnt from "./main/skillsLearnt";
// import Certifications from "./main/certifications";
import Citations from "./main/citations";

const MainPage = () => {
  return (
    <>
      {/* ABOUT THIS WEBSITE */}
      <AboutThisWebsite />

      {/* ABOUT MYSELF */}
      <AboutMyself />

      {/* PROGRAMMING PROJECTS */}
      <ProgrammingProjects />

      {/* TECHSTACK*/}
      {/* <TechStack /> */}

      {/* FUTURE PROJECT IDEAS */}
      {/* <FutureProjectIdeas /> */}

      {/* Skills Learnt */}
      <SkillsLearnt />

      {/* CERTIFICATIONS */}
      {/* <Certifications /> */}

      {/* Citations */}
      <Citations />
    </>
  );
};

export default MainPage;

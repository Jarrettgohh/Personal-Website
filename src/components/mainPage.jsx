import React from "react";

import AboutThisWebsite from "./main/aboutThisWebsite";
import AboutMyself from "./main/aboutMyself";
import InterestAIML from "./main/interestAIML";
import ProgrammingProjects from "./main/programmingProjects";
import TypeScriptIntegration from "./main/typeScriptIntegration";
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

      {/* TYPESCRIPT INTEGRATION IN PROJECTS */}
      <TypeScriptIntegration />

      {/* INTEREST IN AI/ML */}
      <InterestAIML />

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

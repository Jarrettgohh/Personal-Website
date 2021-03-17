import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import NavbarComponent from "./components/navbarComponent";
import MainPage from "./components/mainPage";
import ProjectPage from "./components/common/projectPage";

import onePAProject from "./components/projects/onePAProject.js";
import mapProjectWebsite from "./components/projects/mapProjectWebsite";
import mapProjectApp from "./components/projects/mapProjectApp";
import miniGames from "./components/projects/miniGames";
import chatSystem from "./components/projects/chatSystem";
import matrixStuff from "./components/projects/matrixStuff";

import "./css/main.css";

function App() {
  return (
    // To be refactored

    <>
      {/* Navbar Component */}
      <NavbarComponent />

      <BrowserRouter>
        <Switch>
          <Route path="/projects/onepa-badminton-automation">
            <ProjectPage
              name="onePA Badminton Court Automation"
              about={onePAProject.about()}
              problems={onePAProject.problems()}
              learnt={onePAProject.learnt()}
              tech={onePAProject.tech()}
              resources={onePAProject.resources()}
              github={onePAProject.github()}
            />
          </Route>
          <Route path="/projects/map-project-website">
            <ProjectPage
              note={mapProjectWebsite.note()}
              name="Map Project Website"
              examples={mapProjectWebsite.examples()}
              about={mapProjectWebsite.about()}
              problems={mapProjectWebsite.problems()}
              learnt={mapProjectWebsite.learnt()}
              tech={mapProjectWebsite.tech()}
              resources={mapProjectWebsite.resources()}
              github={mapProjectWebsite.github()}
            />
          </Route>
          <Route path="/projects/map-project-app">
            <ProjectPage
              note={mapProjectApp.note()}
              name="Map Project App"
              about={mapProjectApp.about()}
              problems={mapProjectApp.problems()}
              learnt={mapProjectApp.learnt()}
              tech={mapProjectApp.tech()}
              resources={mapProjectApp.resources()}
              packages={mapProjectApp.packages()}
              github={mapProjectApp.github()}
            />
          </Route>
          <Route path="/projects/mini-games">
            <ProjectPage
              note={miniGames.note()}
              name="Mini Browser Games"
              // examples={miniGames.examples()}
              about={miniGames.about()}
              problems={miniGames.problems()}
              learnt={miniGames.learnt()}
              tech={miniGames.tech()}
              resources={miniGames.resources()}
              github={miniGames.github()}
            />
          </Route>
          <Route path="/projects/simple-chat-system">
            <ProjectPage
              note={chatSystem.note()}
              name="Chat System"
              examples={chatSystem.examples()}
              about={chatSystem.about()}
              problems={chatSystem.problems()}
              learnt={chatSystem.learnt()}
              tech={chatSystem.tech()}
              resources={chatSystem.resources()}
              videos={chatSystem.videos()}
              // github={chatSystem.github()}
            />
          </Route>
          <Route path="/projects/matrix-stuff">
            <ProjectPage
              note={matrixStuff.note()}
              name="Cool Matrix Stuff"
              examples={matrixStuff.examples()}
              about={matrixStuff.about()}
              learnt={matrixStuff.learnt()}
              tech={matrixStuff.tech()}
              resources={matrixStuff.resources()}
              github={matrixStuff.github()}
            />
          </Route>

          {/* MAIN PAGE */}
          <Route path="/Personal-Website/">
            <MainPage />
          </Route>

          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

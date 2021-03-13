import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import NavbarComponent from "./components/navbarComponent";
import MainPage from "./components/mainPage";
import ProjectComponent from "./components/projects/projectComponent";

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
            <ProjectComponent
              name="onePA Badminton Court Automation"
              examples={onePAProject.examples()}
              about={onePAProject.about()}
              problems={onePAProject.problems()}
              learnt={onePAProject.learnt()}
              resources={onePAProject.resources()}
              github={onePAProject.github()}
            />
          </Route>
          <Route path="/projects/map-project-website">
            <ProjectComponent
              name="Map Project Website"
              examples={mapProjectWebsite.examples()}
              about={mapProjectWebsite.about()}
              problems={mapProjectWebsite.problems()}
              learnt={mapProjectWebsite.learnt()}
              resources={mapProjectWebsite.resources()}
              github={mapProjectWebsite.github()}
            />
          </Route>
          <Route path="/projects/map-project-app">
            <ProjectComponent
              name="Map Project App"
              examples={mapProjectApp.examples()}
              about={mapProjectApp.about()}
              problems={mapProjectApp.problems()}
              learnt={mapProjectApp.learnt()}
              resources={mapProjectApp.resources()}
              packages={mapProjectApp.packages()}
              github={mapProjectApp.github()}
            />
          </Route>
          <Route path="/projects/mini-games">
            <ProjectComponent
              name="Mini Browser Games"
              examples={miniGames.examples()}
              about={miniGames.about()}
              problems={miniGames.problems()}
              learnt={miniGames.learnt()}
              resources={miniGames.resources()}
              github={miniGames.github()}
            />
          </Route>
          <Route path="/projects/simple-chat-system">
            <ProjectComponent
              name="Chat System"
              examples={chatSystem.examples()}
              about={chatSystem.about()}
              problems={chatSystem.problems()}
              learnt={chatSystem.learnt()}
              resources={chatSystem.resources()}
              github={chatSystem.github()}
            />
          </Route>
          <Route path="/projects/binary-rain">
            <ProjectComponent
              name="Cool Matrix Stuff"
              examples={matrixStuff.examples()}
              about={matrixStuff.about()}
              learnt={matrixStuff.learnt()}
              resources={matrixStuff.resources()}
              github={matrixStuff.github()}
            />
          </Route>

          {/* MAIN PAGE */}
          <Route path="/">
            <MainPage />
          </Route>

          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

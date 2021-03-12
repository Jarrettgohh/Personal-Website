import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import NavbarComponent from "./components/navbarComponent";
import MainPage from "./components/mainPage";
import ProjectComponent from "./components/projects/projectComponent";

import onePAProject from "./components/projects/onePAProject.js";
import mapProjectWebsite from "./components/projects/mapProjectWebsite";
import mapProjectApp from "./components/projects/mapProjectApp";
import miniGames from "./components/projects/miniGames";

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
              about={onePAProject.about()}
              learnt={onePAProject.learnt()}
              resources={onePAProject.resources()}
              github={onePAProject.github()}
            />
          </Route>
          <Route path="/projects/map-project-website">
            <ProjectComponent
              name="Map Project Website"
              about={mapProjectWebsite.about()}
              learnt={mapProjectWebsite.learnt()}
              resources={mapProjectWebsite.resources()}
              github={mapProjectWebsite.github()}
            />
          </Route>
          <Route path="/projects/map-project-app">
            <ProjectComponent
              name="Map Project App"
              about={mapProjectApp.about()}
              learnt={mapProjectApp.learnt()}
              resources={mapProjectApp.resources()}
              github={mapProjectApp.github()}
            />
          </Route>
          <Route path="/projects/mini-games">
            <ProjectComponent
              name="Mini Browser Games"
              about={miniGames.about()}
              learnt={miniGames.learnt()}
              resources={miniGames.resources()}
              github={miniGames.github()}
            />
          </Route>
          <Route path="/projects/simple-chat-system">
            <ProjectComponent />
          </Route>
          <Route path="/projects/binary-rain">
            <ProjectComponent />
          </Route>
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

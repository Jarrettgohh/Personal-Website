import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import MainPage from "./components/mainPage";
import OnePAProject from "./components/onePAProject";

import "./css/main.css";

function App() {
  return (
    // To be refactored
    <BrowserRouter>
      <Switch>
        <Route path="/projects/onepa-badminton-automation">
          <OnePAProject />
        </Route>
        <Route path="/projects/map-project-website">
          <OnePAProject />
        </Route>
        <Route path="/projects/map-project-app">
          <OnePAProject />
        </Route>
        <Route path="/projects/mini-games">
          <OnePAProject />
        </Route>
        <Route path="/projects/simple-chat-system">
          <OnePAProject />
        </Route>
        <Route path="/projects/binary-rain">
          <OnePAProject />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>

        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

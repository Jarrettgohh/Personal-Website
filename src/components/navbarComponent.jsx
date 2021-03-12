import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaGithub, FaNpm, FaStackOverflow } from "react-icons/fa";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" sticky="top" variant="dark" className="navbar-style">
      <Navbar.Brand href="/Personal-Website" className="navbar-brand">
        Jarrett Goh
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            target="_blank"
            rel="noreferrer"
            href="https://stackoverflow.com/users/14631246/jarrett?tab=profile"
            style={{
              color: "white",
              fontSize: "1.2rem",
            }}
          >
            <FaStackOverflow style={{ marginRight: 4 }} />
            Stackoverflow
          </Nav.Link>
          <Nav.Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Jarrettgohh"
            style={{ color: "white", fontSize: "1.2rem" }}
          >
            <FaGithub style={{ marginRight: 4 }} />
            Github
          </Nav.Link>
          <Nav.Link
            target="_blank"
            rel="noreferrer"
            href="https://www.npmjs.com/~jarrett_goh"
            style={{ color: "white", fontSize: "1.2rem" }}
          >
            <FaNpm style={{ marginRight: 4 }} />
            NPM
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;

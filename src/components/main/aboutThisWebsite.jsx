import React from "react";
import { Container, Row } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

const AboutThisWebsite = () => {
  return (
    <Container fluid className="container-style">
      <Row className="row-padding">
        <h1 className="header-text">About This Website</h1>
      </Row>
      <Row className="row-padding">
        <p className="text-style">
          This website is a platform to showcase my projects and to keep track
          of skills and technologies I have learnt over the years as I do these
          projects. This serves as a way for me to be able to go back and look
          at old projects but still be able to understand how they work and
          various technologies/stacks/languages involved.
        </p>
      </Row>
      <Row className="row-padding">
        <FaGithub size="1.5rem" />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Jarrettgohh/Personal-Website"
        >
          <p className="text-style-lg-italic" style={{ marginLeft: "0.6rem" }}>
            <strong>Source code for this website</strong>
          </p>
        </a>
      </Row>
    </Container>
  );
};

export default AboutThisWebsite;

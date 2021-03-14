import React from "react";
import { Container, Row } from "react-bootstrap";

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
    </Container>
  );
};

export default AboutThisWebsite;

import React from "react";
import { Container, Row } from "react-bootstrap";

const FutureProjectIdeas = () => {
  return (
    <Container fluid className="container-style">
      <Row className="row-padding" className="row-padding">
        <h1 className="header-text">Future Project Ideas</h1>
      </Row>
      <Row className="row-padding" className="row-padding">
        <ul>
          <li className="text-style">AWS CLI</li>
          <li className="text-style">AI Voice Assistant</li>
        </ul>
      </Row>
    </Container>
  );
};

export default FutureProjectIdeas;

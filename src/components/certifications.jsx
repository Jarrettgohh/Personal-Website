import React from "react";
import { Container, Row } from "react-bootstrap";

const Certifications = () => {
  return (
    <Container fluid className="container-style">
      <Row className="row-padding">
        <h1 className="header-text">Certifications</h1>
      </Row>
      <Row className="row-padding">
        <ul>
          <li className="text-style">Mosh React Js Course</li>
          <li className="text-style">Mosh Node Js Course</li>
        </ul>
      </Row>
    </Container>
  );
};

export default Certifications;

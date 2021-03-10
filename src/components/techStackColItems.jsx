import React from "react";
import { Row, Col } from "react-bootstrap";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TechStackColItems = ({ techStack }) => {
  return (
    <Row>
      <Col xs={2} xl={2}>
        <FontAwesomeIcon icon={faCheck} color="lime" size="md" />
      </Col>
      <Col xs={10} xl={10}>
        <p className="text-style">
          <strong>{techStack}</strong>
        </p>
      </Col>
    </Row>
  );
};

export default TechStackColItems;

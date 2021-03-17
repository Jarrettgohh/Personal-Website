import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GradeOutlined } from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import skills from "../../utilities/skills";

const SkillsLearnt = () => {
  return (
    <Container fluid className="container-style">
      <Row className="row-padding">
        <GradeOutlined style={{ fill: "#FADD08", fontSize: "2.6rem" }} />
        <h1 className="header-text">Skills Learnt</h1>
      </Row>
      <Row className="row-padding">
        <Col>
          {skills().map((skill, index) => {
            return (
              <Row key={index} style={{ width: "30vw" }}>
                <Col xs={1} xl={1}>
                  <FontAwesomeIcon icon={faCheck} color="lime" />
                </Col>
                <Col xs={11} xl={11}>
                  <p className="text-style">
                    <strong>{skill}</strong>
                  </p>
                </Col>
              </Row>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default SkillsLearnt;

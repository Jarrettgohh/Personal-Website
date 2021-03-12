import React from "react";
import { Container, Row } from "react-bootstrap";
import { GradeOutlined } from "@material-ui/icons";

const SkillsLearnt = () => {
  return (
    <Container fluid className="container-style">
      <Row className="row-padding">
        <GradeOutlined style={{ fill: "#FADD08", fontSize: "2.6rem" }} />
        <h1 className="header-text">Skills Learnt</h1>
      </Row>
      <Row className="row-padding">
        <ul>
          <li className="text-style">Web Design (Cascading Style Sheets)</li>
          <li className="text-style">
            Responsive Design (Bootstrap, rem, vh, vw units)
          </li>
          <li className="text-style">Reusable Components</li>
          <li className="text-style">Clean Code Syntax</li>
          <li className="text-style">Basic Web Security</li>
          <li className="text-style">Debugging Skills</li>
          <li className="text-style">Git Workflows</li>
          <li className="text-style">Windows Command Prompt</li>
          <li className="text-style">NPM</li>
          <li className="text-style">PIP</li>
        </ul>
      </Row>
    </Container>
  );
};

export default SkillsLearnt;

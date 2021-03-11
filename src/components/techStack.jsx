import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TechStackCol from "./techStackCol";
import { ImStack } from "react-icons/im";

const TechStack = () => {
  // To be queried from Node Js server
  const techStackJS = ["React Js", "Node Js", "Bootstrap", "Express Js"];
  const techStackPy = ["Requests", "Beautiful Soup (BS4)"];
  const techStackAWS = [
    "Amplify",
    "Websocket API Gateway",
    "Lambda Functions",
    "S3",
  ];

  return (
    <Container fluid className="container-style">
      <Row xs={1} sm={1} md={1} lg={2} xl={2} className="tech-stack-row">
        {/* Left column */}
        <Col>
          <h1 className="header-text">Tech Stack</h1>
          <ImStack size={36} color="silver" />

          <Row xs={2} sm={2} md={2} lg={1} xl={2}>
            <Col>
              <div style={{ margin: 20, height: 200 }}>
                <img
                  src="JS_logo.png"
                  alt="Javascript Logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    overflow: "hidden",
                  }}
                />
              </div>
            </Col>
            <Col>
              <div style={{ margin: 20, height: 200 }}>
                <img
                  src="Python_logo.png"
                  alt="Python Logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    overflow: "hidden",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Col>

        {/* Right column */}
        <Col>
          <Row>
            <Col>
              <Row
                style={{
                  margin: 10,
                  marginTop: 20,
                  borderBottom: "2px solid silver",
                }}
              >
                <h4 className="header-text">
                  Languages, Frameworks, Libraries and Services used in my
                  projects (Tech Stack)
                </h4>
              </Row>
              <Row style={{ margin: 10 }}>
                <TechStackCol
                  tech="Javascript"
                  styleExt="JS"
                  techStack={techStackJS}
                />
                <TechStackCol
                  tech="Python"
                  styleExt="Py"
                  techStack={techStackPy}
                />
                <TechStackCol
                  tech="AWS"
                  styleExt="AWS"
                  techStack={techStackAWS}
                />
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TechStack;

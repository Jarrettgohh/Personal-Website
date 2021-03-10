import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TechStackCol from "./components/techStackCol";
import "./css/main.css";

function App() {
  const techStackJS = ["React Js", "Node Js", "Bootstrap", "Express Js"];
  const techStackPy = [
    "Requests",
    "Beautiful Soup (BS4)",
    "TensorFlow (Keras)",
  ];
  const techStackAWS = [
    "Amplify",
    "Websocket API Gateway",
    "Lambda Functions",
    "S3",
  ];

  return (
    <React.Fragment>
      <Container fluid style={{ padding: 0 }}>
        <Row
          xs={1}
          xs={1}
          sm={1}
          md={1}
          lg={2}
          xl={2}
          className="justify-content-center"
          noGutters={true}
          style={{
            marginBottom: 80,
            padding: 20,
          }}
        >
          {/* Left top column */}
          <Col>
            <Row xs={2} sm={2} md={2} lg={1} xl={2}>
              <Col
                // xs="auto"
                // sm="auto"
                // md="auto"
                // lg="auto"
                // xl="auto"
                style={{
                  // minWidth: "auto",
                  // maxWidth: "25%",
                  // margin: 10,
                  height: 200,
                }}
              >
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
              </Col>
              <Col
                // xs="auto"
                // sm="auto"
                // md="auto"
                // lg="auto"
                // xl="auto"
                style={{
                  // minWidth: "auto",
                  // maxWidth: "25%",
                  // margin: 10,
                  height: 200,
                }}
              >
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
              </Col>
            </Row>
          </Col>

          {/* Right top column */}
          <Col>
            <Row>
              <Col>
                <Row style={{ margin: 20, marginTop: 40 }}>
                  <h4>
                    <i>
                      Languages, Frameworks, Libraries and Services used in my
                      projects (Tech Stack)
                    </i>
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

      <div style={{ padding: 20 }}>
        <h1>Projects</h1>
      </div>

      <div style={{ padding: 20 }}>
        <h1>About myself</h1>
        <p className="text-style">
          Hello! My name is Jarrett Goh and I am a student taking a course in
          engineering of Nanotechnology & Materials Science in Nanyang
          Polytechnic.
        </p>
        <p className="text-style">
          During my free time, I love playing sports such as Badminton,
          exercising and doing computer programming!
        </p>
        <p className="text-style">
          I got my love for programming during the first year of my studies in
          polytechnic, when I took computer programming as one of my modules. My
          programming language of interest includes Javascript for web/mobile
          and Python for automations and data science. My plan for the future is
          to find a way to combine Nanotechnology, Artifical Intelligence and
          Automated programming together!
        </p>
      </div>

      <div style={{ padding: 20 }}>
        <h1>Citations for images used</h1>
        <p style={{ fontSize: 18 }}>
          https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png
          (Javascript logo)
        </p>
        <p style={{ fontSize: 18 }}>
          https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png
          (React.JS logo)
        </p>
        <p style={{ fontSize: 18 }}>
          https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png
          (Node.JS logo)
        </p>
        <p style={{ fontSize: 18 }}>
          https://img.favpng.com/11/9/21/scalable-vector-graphics-javascript-python-logo-png-favpng-tKyB5ctiXpKLLQAf8tKx9kjyi.jpg
          (Python logo)
        </p>
      </div>
    </React.Fragment>
  );
}

export default App;

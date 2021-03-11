import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaGit, FaGithub } from "react-icons/fa";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GradeOutlined } from "@material-ui/icons";

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

  const testEventData = [
    {
      id: 1,
      name: "onePA Badminton Courts Automation",
      startDateTime: "3:03",
      endDateTime: "5:03",
      tagId: "Sports",
      src: "Web-Crawler.png",
    },
    {
      id: 2,
      name: "Map Project",
      startDateTime: "3:03",
      endDateTime: "5:03",
      tagId: "Sports",
      src: "Map.png",
    },
    {
      id: 3,
      name: "Mini Game",
      startDateTime: "3:03",
      endDateTime: "5:03",
      tagId: "Sports",
      src: "Games.png",
    },
    {
      id: 4,
      name: "Test",
      startDateTime: "3:03",
      endDateTime: "5:03",
      tagId: "Sports",
    },
    {
      id: 5,
      name: "Test",
      startDateTime: "3:03",
      endDateTime: "5:03",
      tagId: "Sports",
    },
  ];

  return (
    <React.Fragment>
      <div>Top Navbar with link to Github, Stackoverflow and NPM account</div>

      <Container fluid style={{ padding: 0 }}>
        <Row
          xs={1}
          sm={1}
          md={1}
          lg={2}
          xl={2}
          className="top-row justify-content-center"
          // noGutters={true}
        >
          {/* Left top column */}
          <Col>
            <Row xs={2} sm={2} md={2} lg={1} xl={2}>
              <Col
                style={{
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
                style={{
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

      <Container fluid>
        <Row xs={1} sm={2} md={2} lg={3} xl={4}>
          {testEventData.map((data) => {
            return (
              // Double Card components for the margin spacing effect without losing responsive orientation
              <Card style={{ border: "none" }}>
                <Card
                  style={{
                    flex: 1,
                    margin: 10,
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={data.src}
                    style={{
                      width: "12rem",
                      height: "12rem",
                      alignSelf: "center",
                    }}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontWeight: "bold" }}>
                      {data.name}
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>

                    <FaGithub size="1.4rem" />
                    <a
                      target="_blank"
                      href="https://github.com/Jarrettgohh/Onepa-Badminton-Courts-Finder-Python"
                      style={{ color: "tomato", marginLeft: 10 }}
                    >
                      Source Code
                    </a>
                  </Card.Body>
                </Card>
              </Card>
            );
          })}
        </Row>
      </Container>

      <div style={{ padding: 20 }}>
        <Row>
          <FontAwesomeIcon icon={faStar} color="green" />
          <h1>Skills Learnt</h1>
        </Row>
        <Row>
          <ul>
            <li className="text-style">Web Design (Cascading Style Sheets)</li>
            <li className="text-style">Responsive Design (Bootstrap)</li>
            <li className="text-style">Reusable Components</li>
            <li className="text-style">Clean Code Syntax</li>
            <li className="text-style">Basic Web Security</li>
            <li className="text-style">Debugging Skills</li>
            <li className="text-style">Git Workflows</li>
            <li className="text-style">NPM</li>
            <li className="text-style">PIP</li>
          </ul>
        </Row>
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
        <p style={{ fontSize: 18 }}>
          Photo credit for Maps Logo
          https://freedesignfile.com/614055-travel-map-cartoon-vector/
        </p>
        <p style={{ fontSize: 18 }}>
          Photo credit for Mini Games Logo https://www.instagram.com/skiraila/
        </p>
        <p style={{ fontSize: 18 }}>
          Photo credit for Web Spider Logo
          https://www.hiclipart.com/free-transparent-background-png-clipart-pbtsf/download
        </p>
      </div>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import { Container, Row, Col, Card, Navbar, Nav } from "react-bootstrap";
import { GradeOutlined } from "@material-ui/icons";
import { FaGithub, FaNpm, FaStackOverflow } from "react-icons/fa";
import { ImStack } from "react-icons/im";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TechStackCol from "./components/techStackCol";
import "./css/main.css";

function App() {
  const techStackJS = ["React Js", "Node Js", "Bootstrap", "Express Js"];
  const techStackPy = ["Requests", "Beautiful Soup (BS4)"];
  const techStackAWS = [
    "Amplify",
    "Websocket API Gateway",
    "Lambda Functions",
    "S3",
  ];

  const ProjectData = [
    {
      id: 1,
      name: "onePA Badminton Courts Automation",
      description:
        "Python project using web scraping libraries to automate the boring stuff such as finding of badminton courts!",
      src: "Web-Crawler.png",
    },
    {
      id: 2,
      name: "Map Project Website",
      description:
        "Simple website project to allow users to place activities on maps!",
      src: "Map.png",
    },
    {
      id: 5,
      name: "Map Project App",
      description: "Mobile App version of the map project website",
      src: "Map-App.png",
    },
    {
      id: 3,
      name: "Mini Games",
      description: "Mini experimental games made on the browser!",
      src: "Games.png",
    },
    {
      id: 4,
      name: "Simple Chat System",
      description: "Chat system for real time communication!",
      src: "Chat-System.png",
    },
  ];

  return (
    <React.Fragment>
      <Navbar expand="lg" sticky="top" variant="dark" className="navbar-style">
        <Navbar.Brand href="#home" className="navbar-brand">
          Jarrett Goh
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              target="_blank"
              rel="noreferrer"
              href="https://stackoverflow.com/users/14631246/jarrett?tab=profile"
              style={{
                color: "white",
                fontSize: "1.2rem",
              }}
            >
              <FaStackOverflow style={{ marginRight: 4 }} />
              Stackoverflow
            </Nav.Link>
            <Nav.Link
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Jarrettgohh"
              style={{ color: "white", fontSize: "1.2rem" }}
            >
              <FaGithub style={{ marginRight: 4 }} />
              Github
            </Nav.Link>
            <Nav.Link
              target="_blank"
              rel="noreferrer"
              href="https://www.npmjs.com/~jarrett_goh"
              style={{ color: "white", fontSize: "1.2rem" }}
            >
              <FaNpm style={{ marginRight: 4 }} />
              NPM
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* ABOUT MYSELF */}
      <Container fluid className="container-style">
        <Row className="row-padding">
          <h1 className="header-text">About myself</h1>
        </Row>
        <Row className="row-padding">
          <p className="text-style">
            Hello! My name is Jarrett Goh Xiang Zheng and I am a student taking
            a course in engineering of Nanotechnology & Materials Science in
            Nanyang Polytechnic.
          </p>
          <p className="text-style">
            During my free time, I love playing sports such as Badminton,
            exercising and doing computer programming!
          </p>
          <p className="text-style">
            I developed my love for programming during the first year of my
            studies in polytechnic, when I took computer programming as one of
            my modules. My programming language of interest includes Javascript
            for web/mobile development and Python for automations and data
            science. My plan for the future is to find a way to combine
            Nanotechnology, Artifical Intelligence and Automated programming
            together!
          </p>
        </Row>
      </Container>

      {/* PROGRAMMING PROJECTS */}
      <Container fluid className="container-style">
        <Row className="row-padding">
          <h1 className="header-text">Programming Projects</h1>
        </Row>
        <Row xs={1} sm={2} md={2} lg={3} xl={4} className="row-padding">
          {ProjectData.map((data) => {
            return (
              // Double Card components for the margin spacing effect without losing responsive orientation
              // Simple workaround
              <Card className="project-outer-card" key={data.id}>
                <Card className="project-inner-card">
                  <Card.Img
                    variant="top"
                    src={data.src}
                    className="project-card-img"
                  />
                  <Card.Body className="project-card-body">
                    <Card.Title className="project-card-title">
                      {data.name}
                    </Card.Title>
                    <Card.Text className="project-card-text">
                      {data.description}
                    </Card.Text>
                    <Row noGutters={true} className="project-github-row">
                      <FaGithub size="1.4rem" />
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/Jarrettgohh/Onepa-Badminton-Courts-Finder-Python"
                        className="project-card-github"
                      >
                        Source Code
                      </a>
                    </Row>
                  </Card.Body>
                </Card>
              </Card>
            );
          })}
        </Row>
      </Container>

      {/* TECHSTACK*/}
      <Container fluid className="container-style">
        <Row xs={1} sm={1} md={1} lg={2} xl={2} className="tech-stack-row">
          {/* Left column */}
          <Col>
            <h1 className="header-text">Tech Stack</h1>
            <ImStack size={36} />

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

      {/* FUTURE PROJECT IDEAS */}
      <Container fluid className="container-style">
        <Row className="row-padding" className="row-padding">
          <GradeOutlined style={{ fill: "#FADD08", fontSize: "2.6rem" }} />
          <h1 className="header-text">Future Project Ideas</h1>
        </Row>
        <Row className="row-padding" className="row-padding">
          <ul>
            <li className="text-style">AWS CLI</li>
            <li className="text-style">AI Voice Assistant</li>
          </ul>
        </Row>
      </Container>

      <Container fluid className="container-style">
        <Row className="row-padding" className="row-padding">
          <GradeOutlined style={{ fill: "#FADD08", fontSize: "2.6rem" }} />
          <h1 className="header-text">Skills Learnt</h1>
        </Row>
        <Row className="row-padding" className="row-padding">
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

      <Container fluid className="container-style">
        <div className="row-padding">
          <h1 className="header-text">Citations for images used</h1>
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
            Photo credit for Map Website Logo
            https://freedesignfile.com/614055-travel-map-cartoon-vector/
          </p>
          <p style={{ fontSize: 18 }}>
            Photo credit for Map App Logo
            https://www.hiclipart.com/free-transparent-background-png-clipart-jivti/download
          </p>
          <p style={{ fontSize: 18 }}>
            Photo credit for Mini Games Logo https://www.instagram.com/skiraila/
          </p>
          <p style={{ fontSize: 18 }}>
            Photo credit for Web Spider Logo
            https://www.hiclipart.com/free-transparent-background-png-clipart-pbtsf/download
          </p>
          <p style={{ fontSize: 18 }}>
            Photo credit for Chat System Logo
            https://www.pinterest.com/pin/744993963353988412/
          </p>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;

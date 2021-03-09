import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./css/main.css";

function App() {
  return (
    <React.Fragment>
      <Container fluid>
        <Row
        // style={{
        //   marginBottom: 80,
        //   padding: 20,
        // }}
        >
          <Col style={{ height: 100 }}>
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
          <Col style={{ height: 100 }}>
            <img
              src="React_logo.png"
              alt="ReactJs Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                overflow: "hidden",
              }}
            />
          </Col>
          <Col style={{ height: 100 }}>
            <img
              src="Node_logo.png"
              alt="NodeJs Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                overflow: "hidden",
              }}
            />
          </Col>
          <Col style={{ height: 100 }}>
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
      </Container>

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

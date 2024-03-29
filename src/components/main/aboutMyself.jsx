import React from "react";
import { Container, Row } from "react-bootstrap";
import { SiVisualstudiocode } from "react-icons/si";

const AboutMyself = () => {
  return (
    <Container fluid className="container-style">
      <Row className="row-padding">
        <h1 className="header-text">About myself</h1>
      </Row>
      <Row className="row-padding">
        <p className="text-style">
          Hello! My name is Jarrett Goh Xiang Zheng and I am a graduate student
          from Nanyang Polytechnic, Nanotechnology & Materials Science in the
          School of Engineering.
        </p>
        <p className="text-style">
          During my free time, I love playing sports such as Badminton,
          exercising and doing computer programming!
        </p>
        <p className="text-style">
          I developed my love for programming during the first year of my
          studies in polytechnic, when I took computer programming as one of my
          modules. My programming language of interest includes Javascript for
          web/mobile development and Python for automations and data science. My
          plan for the future is to find a way to combine Nanotechnology,
          Artifical Intelligence and Automated programming together!
        </p>
      </Row>
      <Row className="row-padding">
        <p className="text-style-lg-italic" style={{ marginRight: "0.6rem" }}>
          <strong>Favorite Code Editor</strong>
        </p>
        <SiVisualstudiocode size="1.8rem" color="#00A6FF" />
      </Row>
    </Container>
  );
};

export default AboutMyself;

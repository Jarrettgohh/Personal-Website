import React from "react";
import { Container, Row } from "react-bootstrap";
import { GradeOutlined } from "@material-ui/icons";
import { FaGithub } from "react-icons/fa";

const ProjectComponent = ({ name, about, learnt, resources, github }) => {
  return (
    <Container fluid className="project-container-style">
      {/* ABOUT THE PROJECT */}
      <Row className="row-padding" style={{ borderBottom: "2px solid silver" }}>
        <h1 className="header-text-lg" style={{ color: "maroon" }}>
          {name}
        </h1>
      </Row>
      <Row className="row-padding">
        <h1 className="header-text">About The Project</h1>
      </Row>
      <Row className="row-padding">{about}</Row>

      {/* WHAT I HAVE LEARNT */}
      <Row className="row-padding">
        <h1 className="header-text">What I have learnt</h1>
      </Row>
      <Row className="row-padding">{learnt}</Row>

      {/* LEARNING RESOURCES */}
      <Row className="row-padding">
        <h1 className="header-text">Learning Resources</h1>
      </Row>
      {resources.map((resource, index) => {
        return (
          <Row key={index}>
            <GradeOutlined style={{ fill: "#FADD08", fontSize: "2rem" }} />
            <a
              className="text-style-lg-italic"
              style={{ cursor: "pointer" }}
              target="_blank"
              rel="noreferrer"
              href={resource.url}
            >
              {resource.name}
            </a>
          </Row>
        );
      })}

      {/* GITHUB SOURCE CODE */}
      <Row noGutters={true} className="project-github-row">
        <FaGithub size="1.4rem" />
        <a
          target="_blank"
          rel="noreferrer"
          href={github}
          className="project-card-github"
        >
          Source Code
        </a>
      </Row>
    </Container>
  );
};

export default ProjectComponent;

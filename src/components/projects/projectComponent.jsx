import React, { useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import { GradeOutlined } from "@material-ui/icons";
import { FaGithub } from "react-icons/fa";
import { ImNpm } from "react-icons/im";
import { FiLink } from "react-icons/fi";

const ProjectComponent = ({
  name,
  examples,
  about,
  problems,
  learnt,
  resources,
  packages,
  github,
}) => {
  const topRow = useRef();

  useEffect(() => {
    // To make sure page starts from the top
    topRow.current.scrollIntoView({ block: "end", behavior: "smooth" });
  }, []);

  return (
    <Container fluid className="project-container-style">
      {/* TOP ROW AS A WORKAROUND, BECAUSE PAGE ALWAYS NOT AT TOP ON RENDER */}
      <Row ref={topRow} />

      {/* ABOUT THE PROJECT */}
      <Row className="row-padding" style={{ borderBottom: "2px solid silver" }}>
        <h1 className="header-text-lg" style={{ color: "maroon" }}>
          {name}
        </h1>
        {examples && (
          <div style={{ marginLeft: 20 }}>
            {examples.map((example, index) => {
              return (
                <div key={index}>
                  <FiLink size="1.2rem" color="gray" />
                  <a
                    href={example.url}
                    style={{ cursor: "pointer" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {example.name}
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </Row>
      <Row className="row-padding">
        <h1 className="header-text">About The Project</h1>
      </Row>
      <Row className="row-padding">{about}</Row>

      {/* PROBLEMS FACED */}
      {problems && (
        <>
          <Row className="row-padding">
            <h1 className="header-text">Problems Faced</h1>
          </Row>
          <Row className="row-padding">{problems}</Row>
        </>
      )}

      {/* WHAT I HAVE LEARNT */}
      <Row className="row-padding">
        <h1 className="header-text">What I Have Learnt</h1>
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

      {/* PUBLISHED PACKAGES */}
      {packages && (
        <>
          <Row className="row-padding" style={{ marginTop: 16 }}>
            <h1 className="header-text">Published NPM Packages</h1>
          </Row>
          {packages.map((NPM, index) => {
            return (
              <Row key={index} className="row-padding">
                <ImNpm size="1.4rem" color="red" />

                <a
                  className="text-style-lg-italic"
                  style={{ cursor: "pointer", marginLeft: 8 }}
                  target="_blank"
                  rel="noreferrer"
                  href={NPM.url}
                >
                  {NPM.name}
                </a>
              </Row>
            );
          })}
        </>
      )}

      {/* GITHUB SOURCE CODE */}
      <Row noGutters={true} className="project-github-row">
        <FaGithub size="1.4rem" />
        {github.map((gitItem, index) => {
          return (
            <a
              key={index}
              target="_blank"
              rel="noreferrer"
              href={gitItem.url}
              className="project-card-github"
            >
              {gitItem.name ? gitItem.name : "Source Code"}
            </a>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProjectComponent;

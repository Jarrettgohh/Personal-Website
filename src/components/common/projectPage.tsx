import React, { FC, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GradeOutlined } from "@material-ui/icons";
import { FaGithub } from "react-icons/fa";
import { ImNpm } from "react-icons/im";
import { FiLink } from "react-icons/fi";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface Example {
  name: string;
  url: string;
}

interface Resource {
  name: string;
  url: string;
}

interface Package {
  name: string;
  url: string;
}

interface Video {
  name: string;
  url: string;
}

interface Github {
  name?: string;
  url: string;
}

interface Props {
  note?: string;
  name: string;
  examples?: Example[];
  about: JSX.Element;
  problems?: JSX.Element;
  learnt?: JSX.Element;
  tech?: string[];
  resources?: Resource[];
  packages?: Package[];
  videos?: Video[];
  github?: Github[];
}

const ProjectPage: FC<Props> = ({
  name,
  note,
  examples,
  about,
  problems,
  learnt,
  tech,
  resources,
  packages,
  videos,
  github,
}) => {
  const topRow = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // To make sure page starts from the top
    topRow.current?.scrollIntoView({ block: "end", behavior: "smooth" });
  }, []);

  return (
    <Container fluid className="project-container-style">
      {/* TOP ROW AS A WORKAROUND, BECAUSE PAGE ALWAYS NOT AT TOP ON RENDER */}
      <Row ref={topRow} />

      {/* PROJECT NAME */}
      <Row className="row-padding" style={{ borderBottom: "2px solid silver" }}>
        <h1 className="header-text-lg" style={{ color: "maroon" }}>
          {name}
        </h1>

        {/* EXAMPLES */}
        {examples && (
          <div style={{ marginLeft: 20 }}>
            {examples.map((example, index) => {
              return (
                <div key={index}>
                  <FiLink
                    size="1.2rem"
                    color="gray"
                    style={{ marginRight: 6 }}
                  />
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
        {note && (
          <div>
            <h6 style={{ margin: 20 }}>
              <strong>{`P.S ${note}`}</strong>
            </h6>
          </div>
        )}
      </Row>

      {/* VIDEO EXAMPLES */}
      {videos && (
        <>
          <Row className="row-padding" style={{ marginTop: 40 }}>
            <h1 className="header-text">Video Examples</h1>
          </Row>
          {videos.map((video, index) => {
            return (
              <Col key={index} style={{ margin: 20 }}>
                <p className="text-style-lg-italic">{video.name}</p>
                <Row className="row-padding">
                  <ReactPlayer url={video.url} controls={true} />
                </Row>
              </Col>
            );
          })}
        </>
      )}

      {/* ABOUT: JSX.Element THE PROJECT */}
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

      {/* TECH STACK */}
      {tech && (
        <>
          <Row className="row-padding">
            <h1 className="header-text">Tech Stack</h1>
          </Row>
          <Row className="row-padding">
            <Col>
              {tech.map((stack, index) => {
                return (
                  <Row key={index} style={{ width: "30vw" }}>
                    <Col xs={1} xl={1}>
                      <FontAwesomeIcon icon={faCheck} color="lime" />
                    </Col>
                    <Col xs={11} xl={11}>
                      <p className="text-style">
                        <strong>{stack}</strong>
                      </p>
                    </Col>
                  </Row>
                );
              })}
            </Col>
          </Row>
        </>
      )}

      {/* LEARNING RESOURCES */}
      <Row className="row-padding">
        <h1 className="header-text">Learning Resources</h1>
      </Row>

      {resources &&
        resources.map((resource, index) => {
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
      {github && (
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
      )}
    </Container>
  );
};

export default ProjectPage;

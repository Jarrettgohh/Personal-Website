import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

const ProgrammingProjects = () => {
  // To be queried from Node Js server
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
      src: "Chat-System-Icon.png",
    },
    {
      id: 5,
      name: "Matrix Binary Screen",
      description: "Binary Falling screen with different colors.",
      src: "Binary-Rain.png",
      fullWidth: true,
    },
  ];

  return (
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
                  style={data.fullWidth && { width: "100%" }}
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
  );
};

export default ProgrammingProjects;

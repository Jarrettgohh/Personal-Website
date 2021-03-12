import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import {
  FaGithub,
  FaPython,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaAws,
  FaHtml5,
  FaCss3,
  FaJs,
} from "react-icons/fa";
import { SiHeroku, SiSocketDotIo } from "react-icons/si";
import { useHistory } from "react-router-dom";

const ProgrammingProjects = () => {
  // To be queried from Node Js server
  const ProjectData = [
    {
      id: 1,
      name: "onePA Badminton Courts Automation",
      description:
        "Python project using web scraping libraries to automate the boring stuff such as finding of badminton courts!",
      src: "Personal-Website/Web-Crawler.png",
      stack: <FaPython size="1.4rem" color="#FAC308" />,
    },
    {
      id: 2,
      name: "Map Project Website",
      description:
        "Simple website project to allow users to place activities on maps!",
      src: "Personal-Website/Map.png",
      stack: (
        <>
          <FaReact size="1.4rem" color="#08DDFA" />
          <FaNodeJs size="1.4rem" color="green" />
          <FaBootstrap size="1.4rem" color="purple" />
          <FaAws size="1.4rem" color="#AA9939" />
        </>
      ),
    },
    {
      id: 3,
      name: "Map Project App",
      description: "Mobile App version of the map project website.",
      src: "Personal-Website/Map-App.png",
      stack: (
        <>
          <FaReact size="1.4rem" color="#08DDFA" />
          <FaNodeJs size="1.4rem" color="green" />
        </>
      ),
    },
    {
      id: 4,
      name: "Mini Games",
      description: "Mini experimental games made on the browser!",
      src: "Personal-Website/Games.png",
      stack: (
        <>
          <FaJs size="1.4rem" color="#FFD900" />
          <FaHtml5 size="1.4rem" color="red" />
          <FaCss3 size="1.4rem" color="blue" />
        </>
      ),
    },
    {
      id: 5,
      name: "Simple Chat System",
      description: "Chat system for real time communication!",
      src: "Personal-Website/Chat-System-Icon.png",
      stack: (
        <>
          <FaReact size="1.4rem" color="#08DDFA" />
          <FaNodeJs size="1.4rem" color="green" />
          <SiSocketDotIo size="1.4rem" color="gray" />
          <SiHeroku size="1.4rem" color="purple" />
          <FaAws size="1.4rem" color="#AA9939" />
        </>
      ),
    },
    {
      id: 6,
      name: "Matrix Binary Screen",
      description: "Binary Falling screen with different colors.",
      src: "Personal-Website/Binary-Rain.png",
      fullWidth: true,
      stack: (
        <>
          <FaJs size="1.4rem" color="#FFD900" />
          <FaHtml5 size="1.4rem" color="red" />
          <FaCss3 size="1.4rem" color="blue" />
        </>
      ),
    },
  ];

  const history = useHistory();

  const handleProjectClick = (projectId) => {
    const url = returnRouteURL(projectId);
    history.push(`/projects/${url}`);
  };

  const returnRouteURL = (id) => {
    switch (id) {
      case 1:
        return "onepa-badminton-automation";

      case 2:
        return "map-project-website";

      case 3:
        return "map-project-app";

      case 4:
        return "mini-games";

      case 5:
        return "simple-chat-system";

      case 6:
        return "binary-rain";

      default:
        break;
    }
  };

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

            <Card
              className="project-outer-card"
              key={data.id}
              onClick={() => handleProjectClick(data.id)}
            >
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

                    <div
                      style={{
                        display: "flex",
                        flex: 1,
                        justifyContent: "flex-end",
                        marginRight: 30,
                      }}
                    >
                      {data.stack}
                    </div>
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

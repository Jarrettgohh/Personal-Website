import React from "react";
import { Container, Row } from "react-bootstrap";
import { GradeOutlined } from "@material-ui/icons";
import { FaGithub } from "react-icons/fa";

const OnePAProject = () => {
  return (
    <Container fluid className="project-container-style">
      {/* ABOUT THE PROJECT */}
      <Row className="row-padding" style={{ borderBottom: "2px solid silver" }}>
        <h1 className="header-text-lg">onePA Badminton Court Automation</h1>
      </Row>
      <Row className="row-padding">
        <h1 className="header-text">About The Project</h1>
      </Row>
      <Row className="row-padding">
        <p className="text-style">
          I started this project at about the 3rd quarter of 2019. As a
          Badminton player myself, inevitably I have to book courts to play.
          However, the process of finding courts is very painstaking and
          tedious, as I have to check the different locations one by one. The
          inspiration behind this project is to ease the process of finding
          courts & to also practice on my Python skills.
        </p>
        <p className="text-style">
          The Requests module was used to send HTTP requests to the onePA
          website; GET requests in this case. The response would be content,
          encoding, status and more. However, what is the important is the
          content, which would be HTML formatted.
        </p>
        <p className="text-style">
          The content would then be passed into the Beautiful Soup library with
          a html parser. This library would then allow the code to extract
          informations such as html tags and contents. These data is then used
          to provide informations of court availabilities.
        </p>
      </Row>

      {/* WHAT I HAVE LEARNT */}
      <Row className="row-padding">
        <h1 className="header-text">What I have learnt</h1>
      </Row>
      <Row className="row-padding">
        <p className="text-style">
          From this project, I have learnt two libraries namely the Python
          Requests & Beautiful Soup modules. Using these libraries allowed me to
          gain a deeper understanding of how HTTP requests works such as the GET
          requests. I have also learnt more about the HTML syntax and how it is
          used to display informations.
        </p>
        <p className="text-style">
          Another key takeaway would be being able to practice my Python
          scripting skills & to understand more about the syntax of Python. This
          project have gave me knowledgable insides on how useful & fun
          automations can be ;)
        </p>
      </Row>

      {/* LEARNING RESOURCES */}
      <Row className="row-padding">
        <h1 className="header-text">Learning Resources</h1>
      </Row>
      <Row>
        <GradeOutlined style={{ fill: "#FADD08", fontSize: "2rem" }} />
        <a
          className="text-style-lg-italic"
          style={{ cursor: "pointer" }}
          target="_blank"
          rel="noreferrer"
          href="https://requests.readthedocs.io/en/master/"
        >
          Requests
        </a>
      </Row>
      <Row>
        <GradeOutlined style={{ fill: "#FADD08", fontSize: "2rem" }} />
        <a
          className="text-style-lg-italic"
          style={{ cursor: "pointer" }}
          target="_blank"
          rel="noreferrer"
          href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/"
        >
          Beautiful Soup
        </a>
      </Row>

      {/* GITHUB SOURCE CODE */}
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
    </Container>
  );
};

export default OnePAProject;

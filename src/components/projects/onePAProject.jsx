import React from "react";
import { Container, Row } from "react-bootstrap";

const OnePAProject = () => {
  return (
    <Container fluid>
      <Row className="row-padding">
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

      <Row className="row-padding">
        <h1 className="header-text">What I have learnt</h1>
      </Row>
      <Row className="row-padding">
        <p className="text-style">
          From this project, I have learnt about many libraries such as Requests
          & Beautiful Soup. Using these libraries allowed me to gain a deeper
          understanding of how HTTP requests works such as the GET requests. I
          have also learnt more about the HTML syntax and how it is used to
          display informations.
        </p>
        <p className="text-style">
          Another key takeaway would be being able to practice my Python
          scripting skills & to understand more about the syntax of Python. This
          project have gave me knowledgable insides on how useful automations
          can be and also showed me how fun it could be too ;)
        </p>
      </Row>
    </Container>
  );
};

export default OnePAProject;

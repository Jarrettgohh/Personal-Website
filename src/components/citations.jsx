import React from "react";
import { Container, Row } from "react-bootstrap";

const Citations = () => {
  return (
    <Container fluid className="container-style">
      <Row className="row-padding">
        <h1 className="header-text">Citations for images used</h1>
      </Row>
      <Row className="row-padding">
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
      </Row>
    </Container>
  );
};

export default Citations;

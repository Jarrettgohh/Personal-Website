import React from "react";
import { Col } from "react-bootstrap";

import TechStackColItems from "./techStackColItems";

const TechStackCol = ({ tech, styleExt, techStack }) => {
  return (
    <Col>
      {/* styleExt => JS for Javascript, Py for Python and AWS for AWS */}
      <p className={`text-style-header-${styleExt}`}>{tech}</p>

      {techStack.map((stack) => {
        return <TechStackColItems techStack={stack} />;
      })}
    </Col>
  );
};

export default TechStackCol;

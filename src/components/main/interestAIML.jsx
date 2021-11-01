import React from "react";
import { Container, Row } from "react-bootstrap";

export default function InterestAIML() {
  return (
    <Container fluid className="container-style">
      <Row className="row-padding">
        <h1 className="header-text">
          Interest in AI/ML (AI Singapore Application)
        </h1>
      </Row>
      <Row className="row-padding">
        <p className="text-style">
          I am currently working on a mobile app project with React Native.
          However, the source code is private. At the same time, I am also
          learning about the concepts of AI/ML to leverage the data I could
          potentially gather from the user base of my mobile app. I plan to use
          the data to build AI/ML models to improve my customer value capture
          and creation.
        </p>
      </Row>
      <Row className="row-padding">
        <p className="text-style">
          Through my exploration of AI/ML concepts in Tensorflow Keras, I have
          learnt concepts of loss function (binary cross-entropy, sparse
          categorical cross-entropy, ), model layers, activation function,{" "}
        </p>
      </Row>
      <Row className="row-padding">
        <p className="text-style">
          I am also reading a book titled{" "}
          <strong>Competing in the age of AI</strong>, where I have learnt about
          the importance of AI/ML, software and algorithmns in startups,
          business or anywhere that data is involved. On top of that, I have
          learnt about the categories of AI, namely supervised learning,
          unsupervised learning and reinforcement learning.
        </p>
      </Row>
    </Container>
  );
}

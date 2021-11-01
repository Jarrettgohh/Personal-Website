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
          learnt of the multiple components that makes up the neural network
          such as loss function (binary cross-entropy, categorical
          cross-entropy), model layers (text vectorization ,LSTM, 1D
          convolution, embedding) and activation function (rectified linear
          unit, sigmoid, softmax).
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
      <Row className="row-padding">
        <p className="text-style">
          Experiences I have working with Python includes automation and data
          analysis. Related repositories in my Github profile (
          <a
            href="https://github.com/Jarrettgohh"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/Jarrettgohh
          </a>
          ) includes <strong>Onepa-Badminton-Courts-Finder-Python</strong>,{" "}
          <strong>python-cURL</strong> and{" "}
          <strong>excel_data_automation</strong>. My machine learning projects
          includes text classification with bag of words model and 1D
          convolutional layers with text embedding for binary output
          classifications and also for multiple classes/labels classifications.
        </p>
      </Row>
      <Row className="row-padding">
        <p className="text-style">
          Despite being a beginner in AI/ML or the whole concept of data
          science, I am willing to work hard to learn more about it, as I
          believe it is the future!
        </p>
      </Row>
    </Container>
  );
}

import { Container, Row } from "react-bootstrap";

const TypeScriptIntegration = () => {
  return (
    <Container fluid className="container-style">
      <Row className="row-padding">
        <h1 className="header-text">TypeScript Integration</h1>
      </Row>

      <Row className="row-padding">
        <p className="text-style">
          When I started on the <strong> Mobile App Project</strong>; with
          details above, I came across a language built upon JavaScript, that is
          known as TypeScript. I learnt that this language compiles to
          JavaScript, with similar syntax, but provides static type checking.
          This is useful to prevent bugs and issues that may arise due to types.
        </p>
        <p className="text-style">
          Thus, I have actively explored using this language in my
          <strong> Mobile App Project</strong>. The
          <strong> Personal Website </strong> project was built initially
          completely with JavaScript. However, I have integrated TypeScript for
          newer features.
        </p>
      </Row>
    </Container>
  );
};

export default TypeScriptIntegration;

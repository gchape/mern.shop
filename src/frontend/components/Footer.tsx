import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>Mern.Shop &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

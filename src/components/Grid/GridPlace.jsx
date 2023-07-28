import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import GridCard from "./GridCard";
import { Container } from "react-bootstrap";

function GridPlace({ infoData }) {
  return (
    <Row xs={4} md={1} className="d-flex align-items-center">
      <Container className=" p-0 g-4">
        <Col className="m-1 d-flex flex-wrap justify-content-around">
          {infoData.map((card) => (
            <GridCard key={card.id} {...card} />
          ))}
        </Col>
      </Container>
    </Row>
  );
}

export default GridPlace;

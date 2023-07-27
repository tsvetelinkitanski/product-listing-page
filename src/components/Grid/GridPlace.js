import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import GridCard from "./GridCard";
import { Container } from "react-bootstrap";

const manImages = [
  {
    img: "./images/man/pexels-chloe-1043474.jpg",
    title: "smth",
    description: "another smth",
  },
  {
    img: "./images/man/pexels-jt-kim-914472.jpg",
    title: "smth",
    description: "another smth",
  },
  {
    img: "./images/man/pexels-marlene-leppänen-1183266.jpg",
    title: "smth",
    description: "another smth",
  },
  {
    img: "./images/man/pexels-raul-reynoso-1018911.jpg",
    title: "smth",
    description: "another smth",
  },
  {
    img: "./images/man/pexels-rolando-brando-2709563.jpg",
    title: "smth",
    description: "another smth",
  },
  {
    img: "./images/man/pexels-royal-anwar-450212.jpg",
    title: "smth",
    description: "another smth",
  },
];

function GridPlace() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(manImages);
  }, []);

  return (
    <Row xs={2} md={4} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Container>
          <Col key={idx}>
            {cards.map((card) => (
              <GridCard {...card} />
            ))}
          </Col>
        </Container>
      ))}
    </Row>
  );
}

export default GridPlace;

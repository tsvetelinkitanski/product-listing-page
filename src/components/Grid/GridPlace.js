import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import GridCard from "./GridCard";

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
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          {cards.map((card) => (
            <GridCard {...card} />
          ))}
          {/* <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card> */}
        </Col>
      ))}
    </Row>
  );
}

export default GridPlace;

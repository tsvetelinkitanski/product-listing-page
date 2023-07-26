import React from "react";

export default function GridCard(card) {
  return (
    <Card>
      <Card.Img variant="top" src={card.img} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.decription}</Card.Text>
      </Card.Body>
    </Card>
  );
}

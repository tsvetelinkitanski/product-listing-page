// import React from "react";
// import Card from "react-bootstrap/Card";

// export default function GridCard(card) {
//   return (
//     <Card>
//       <Card.Img variant="top" src={card.img} />
//       <Card.Body>
//         <Card.Title>{card.title}</Card.Title>
//         <Card.Text>{card.description}</Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function GridCard(card) {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={card.img} />
        <Card.Body>
          <Card.Title>{card.Title}</Card.Title>
          <Card.Text>{card.description}</Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default GridCard;

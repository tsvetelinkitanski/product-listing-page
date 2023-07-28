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
    <div className="d-flex">
      <Card className="d-flex flex-wrap gy-2" style={{ width: "10rem" }}>
        <Card.Img variant="top" src={card.img} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.description}</Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default GridCard;

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


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GridCard(card) {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={card.img} />
        <Card.Body>
          <Card.Title>{card.Title}</Card.Title>
          <Card.Text>{card.description}
          </Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>

      {/* <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card> */}
    </div>
  );
}

export default GridCard;
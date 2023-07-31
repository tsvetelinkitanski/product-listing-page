import { useState } from "react";
import { Badge, Modal, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Rating } from "react-simple-star-rating";

function GridCard(card) {
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const handleModal = () => {
    setShowModal(!showModal);
  };

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  const calculateDiscountedPrice = () => {
    if (card.discountedPrice) {
      return card.discountedPrice;
    } else {
      return card.price;
    }
  };

  const getPriceColor = () => {
    if (card.discountedPrice) {
      return "danger";
    } else {
      return "dark";
    }
  };

  return (
    <Card
      className="d-flex flex-row flex-wrap mb-5 p-0"
      style={{ width: "20rem" }}
    >
      <img
        className="card-img-top w-100 h-50 m-0"
        src={card.image}
        alt="picture"
      />

      <Modal show={showModal}>
        <Modal.Header>
          <Modal.Title>Product added to cart</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={handleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

        <Card.Body className="d-flex flex-column">
          <div className="d-flex justify-content-between">
            <Card.Title className="mb-0 mt-0 font-weight-bold">
              {card.title}
            </Card.Title>
            <Badge pill className="mb-2" bg={getPriceColor()}>
              ${calculateDiscountedPrice()}
            </Badge>
          </div>
          <Card.Text className="text-secondary w-100 h-100">{card.description}</Card.Text>
          <Button
            className="font-weight-bold"
            variant="primary"
            onClick={handleModal}
          >
            Add to cart
          </Button>
          <div className=" d-flex justify-content-center pt-3">
            <Rating onClick={handleRating} />
          </div>
        </Card.Body>
    </Card>
  );
}

export default GridCard;

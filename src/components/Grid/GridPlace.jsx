import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import GridCard from "./GridCard";
import { Container } from "react-bootstrap";
import dataMan from "../../dataMan.json"

// const manImages = [
//   {
//     img: "./images/man/pexels-chloe-1043474.jpg",
//     title: "smth",
//     description: "another smth",
//   },
//   {
//     img: "./images/man/pexels-jt-kim-914472.jpg",
//     title: "smth",
//     description: "another smth",
//   },
//   {
//     img: "./images/man/pexels-marlene-leppänen-1183266.jpg",
//     title: "smth",
//     description: "another smth",
//   },
//   {
//     img: "./images/man/pexels-raul-reynoso-1018911.jpg",
//     title: "smth",
//     description: "another smth",
//   },
//   {
//     img: "./images/man/pexels-rolando-brando-2709563.jpg",
//     title: "smth",
//     description: "another smth",
//   },
//   {
//     img: "./images/man/pexels-royal-anwar-450212.jpg",
//     title: "smth",
//     description: "another smth",
//   },
// ];

function GridPlace() {
  return (
    <Row xs={4} md={1} className="d-flex align-items-center">
        <Container className=" p-0 g-4">
          <Col className="m-1 d-flex flex-wrap justify-content-around">
            {dataMan.map((card) => (
              <GridCard {...card} />
            ))}
          </Col>
        </Container>
      
    </Row>
  );
}

export default GridPlace;

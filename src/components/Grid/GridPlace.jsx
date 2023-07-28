import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import GridCard from "./GridCard";
import { Button, Container } from "react-bootstrap";
import DropdownSort from "../Dropdown/DropdownSort";

function GridPlace({ infoData }) {
  const [sortedData, setSortedData] = useState(infoData);

  const handleSort = (sortType) => {
    // Apply the sorting logic based on the chosen sort type
    if (sortType === "A-Z") {
      setSortedData(
        [...infoData].sort((a, b) => a.title.localeCompare(b.title))
      );
    } else if (sortType === "Z-A") {
      setSortedData(
        [...infoData].sort((a, b) => b.title.localeCompare(a.title))
      );
    } else if (sortType === "ascending") {
      setSortedData([...infoData].sort((a, b) => a.price - b.price));
    } else if (sortType === "descending") {
      setSortedData([...infoData].sort((a, b) => b.price - a.price));
    }
  };

  return (
    <>
      <div className="d-flex justify-content-end pr-4">
        <DropdownSort onSort={handleSort} />
      </div>
      <Row xs={4} md={1} className="d-flex align-items-center">
        <Container className="p-0 g-4">
          <Col className="m-1 d-flex flex-wrap justify-content-around">
            {sortedData.map((card) => (
              <GridCard key={card.id} {...card} />
            ))}
          </Col>
        </Container>
        <Button className="text-bg-secondary">Load more</Button>
      </Row>
    </>
  );
}

export default GridPlace;

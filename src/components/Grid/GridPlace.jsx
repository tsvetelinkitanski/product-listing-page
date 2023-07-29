import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import GridCard from "./GridCard";
import { Container } from "react-bootstrap";
import DropdownSort from "../Dropdown/DropdownSort";

function GridPlace({ infoData }) {
  const [sortedData, setSortedData] = useState(infoData);

  const handleSort = (sortType) => {
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
      <div className="d-flex justify-content-end pr-2">
        <DropdownSort onSort={handleSort} />
      </div>
      <Row xs={"auto"} md={"auto"} className="d-flex align-items-center gx-5">
        <Container className="p-0 g-4">
          <Col className="m-1 d-flex flex-wrap justify-content-around">
            {sortedData.map((card) => (
              <GridCard key={card.id} {...card} />
            ))}
          </Col>
        </Container>
      </Row>
    </>
  );
}

export default GridPlace;

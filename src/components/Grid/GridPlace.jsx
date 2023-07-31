import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import GridCard from "./GridCard";
import { Container } from "react-bootstrap";
import DropdownSort from "../Dropdown/DropdownSort";
import DropdownFilter from "../Dropdown/DropdownFilter";

function GridPlace({ infoData }) {
  const [filteredData, setFilteredData] = useState(infoData);
  const [sortedData, setSortedData] = useState(filteredData);
  const [productCount, setProductCount] = useState(sortedData.length);

  const handleFilter = (filters) => {
    // Perform filtering logic based on filters (genderFilters and sizeFilters)
    const filteredItems = infoData.filter((item) => {
      const matchingGender =
        filters.genderFilters.length === 0 ||
        filters.genderFilters.includes(item.gender);
      const matchingSize =
        filters.sizeFilters.length === 0 ||
        filters.sizeFilters.includes(item.size);
      return matchingGender && matchingSize;
    });

    setFilteredData(filteredItems);
  };

  const handleSort = (sortType) => {
    if (sortType === "A-Z") {
      setSortedData(
        [...filteredData].sort((a, b) => a.title.localeCompare(b.title))
      );
    } else if (sortType === "Z-A") {
      setSortedData(
        [...filteredData].sort((a, b) => b.title.localeCompare(a.title))
      );
    } else if (sortType === "ascending") {
      setSortedData(
        [...filteredData].sort((a, b) => {
          const aPrice = a.discountedPrice || a.price;
          const bPrice = b.discountedPrice || b.price;
          return aPrice - bPrice;
        })
      );
    } else if (sortType === "descending") {
      setSortedData(
        [...filteredData].sort((a, b) => {
          const aPrice = a.discountedPrice || a.price;
          const bPrice = b.discountedPrice || b.price;
          return bPrice - aPrice;
        })
      );
    }
  };

  // Update sortedData when filteredData changes
  useEffect(() => {
    setSortedData(filteredData);
    setProductCount(filteredData.length);
  }, [filteredData]);

  return (
    <>
      <div className="d-flex justify-content-between flex-row-reverse pr-2">
        <DropdownSort onSort={handleSort} />
        <div className="pl-4 mt-0">
          <DropdownFilter onFilter={handleFilter} />
        </div>
      </div>
      <span className="d-flex justify-content-center text-secondary">
        Items: {productCount}
      </span>
      <Row xs={"auto"} md={"auto"} className="d-flex align-items-center gx-5">
        <Container className=" pb-4 g-4">
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

import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

export default function DropdownFilter({ onFilter }) {
  const [genderFilters, setGenderFilters] = useState([]);
  const [sizeFilters, setSizeFilters] = useState([]);

  const handleGenderFilterChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setGenderFilters((prevFilters) => [...prevFilters, value]);
    } else {
      setGenderFilters((prevFilters) =>
        prevFilters.filter((gender) => gender !== value)
      );
    }
  };

  const handleSizeFilterChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSizeFilters((prevFilters) => [...prevFilters, value]);
    } else {
      setSizeFilters((prevFilters) =>
        prevFilters.filter((size) => size !== value)
      );
    }
  };

  const handleApplyFilters = () => {
    onFilter({ genderFilters, sizeFilters });
  };

  return (
    <div className="p-0 m-0 d-flex position-static ">
      <Tab.Container id="list-group-tabs-example">
        <Row className=" mt-5">
          <Col sm={4}>
            <div className="d-flex">
              <label className="pr-3">Gender</label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="male"
                  onChange={handleGenderFilterChange}
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="female"
                  onChange={handleGenderFilterChange}
                />
                <label className="form-check-label" htmlFor="inlineCheckbox2">
                  Female
                </label>
              </div>
            </div>

            <div className="d-flex">
              <label className="pr-4">Size</label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="S"
                  onChange={handleSizeFilterChange}
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  S
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="M"
                  onChange={handleSizeFilterChange}
                />
                <label className="form-check-label" htmlFor="inlineCheckbox3">
                  M
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox3"
                  value="L"
                  onChange={handleSizeFilterChange}
                />
                <label className="form-check-label" htmlFor="inlineCheckbox2">
                  L
                </label>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <button className="btn btn-primary" onClick={handleApplyFilters}>
                Apply Filters
              </button>
            </div>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

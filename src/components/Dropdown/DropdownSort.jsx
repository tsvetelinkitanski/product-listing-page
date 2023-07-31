import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function DropdownSort({ onSort }) {
  const handleSort = (sortType) => {
    onSort(sortType);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-dark btn-sm mr-4" id="dropdown-basic">
        Sort
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleSort("A-Z")}>A-Z</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSort("Z-A")}>Z-A</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSort("ascending")}>
          Ascending order
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleSort("descending")}>
          Descending order
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownSort;

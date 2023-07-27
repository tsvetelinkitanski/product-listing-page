import Dropdown from "react-bootstrap/Dropdown";

function DropdownSort() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Sort
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">A-Z</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Z-A</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Ascending order</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Descending order</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownSort;

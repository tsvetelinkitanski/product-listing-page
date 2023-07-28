import React from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";

export default function DropdownFilter() {
  return (
    <Tab.Container id="list-group-tabs-example">
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item as={Link} variant="secondary" action to="/man-page">
              Man dress
            </ListGroup.Item>
            <ListGroup.Item
              as={Link}
              variant="secondary"
              action
              to="/woman-page"
            >
              Woman dress
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Tab.Container>
  );
}

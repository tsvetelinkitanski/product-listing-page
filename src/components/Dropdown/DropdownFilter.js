import React from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

export default function DropdownFilter() {
  return (
    <Tab.Container id="list-group-tabs-example">
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item variant="secondary" action href="#link1">
              Man dress
            </ListGroup.Item>
            <ListGroup.Item variant="secondary" action href="#link2">
              Woman dress
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Tab.Container>
  );
}

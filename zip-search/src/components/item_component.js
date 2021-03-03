import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const ItemComponent = ({}) => {
  return (
    <Card style={{ width: "22rem" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default ItemComponent;

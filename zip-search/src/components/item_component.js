import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const ItemComponent = ({title, state, location, population, total_wages}) => {
    return (
      <Card style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem>State: {state}</ListGroupItem>
            <ListGroupItem>Location: {location}</ListGroupItem>
            <ListGroupItem>Population: {population}</ListGroupItem>
            <ListGroupItem>Total Wages: {total_wages}</ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    );
}

export default ItemComponent;

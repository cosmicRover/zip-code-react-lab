import React from "react";
import { Card } from "react-bootstrap";

const ItemNoResult = ({ title }) => {
  return (
    <Card style={{ width: "22rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ItemNoResult;

import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";

const SearchField = ({}) => {
  return (
    <Form style={{ display: "flex", marginLeft: "8px" }}>
      <h3>Zip code: </h3>
      <input style={{ width: "auto", height: "auto" }} type="text" />
    </Form>
  );
};

export default SearchField;

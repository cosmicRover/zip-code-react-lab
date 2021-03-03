import React from "react";
import { Form} from "react-bootstrap";

const SearchField = ({onValueChange}) => {
  return (
    <Form style={{ display: "flex", marginLeft: "8px" }}>
      <h3>Zip code: </h3>
      <input
        style={{ width: "auto", height: "auto" }}
        onChange={onValueChange}
        type="text"
      />
    </Form>
  );
};

export default SearchField;

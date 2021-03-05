import React, { useState } from "react";
import "./App.css";
import ItemComponent from "./components/item_component";
import ItemNoResult from "./components/item_no_result";
import SearchField from "./components/search_field";

function RenderItem({ values }) {
  if (values.length > 0) {
    //loop through each item and add to render list
    const renderList = values.map((item) => {
      return (
        <ItemComponent
          title={item.title}
          state={item.state}
          location={item.location}
          population={item.population}
          total_wages={item.total_wages}
        />
      );
    });

    return renderList;
  } else {
    return <ItemNoResult title="No results!" />;
  }
}

function isValid(str) {
  return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?A-za-z]/g.test(str);
}

const App = () => {
  //used hooks to manage state
  const [items, setItems] = useState([]);
  // useEffect(() => {}, [items]);

  function onValueChange(e) {
    //error handle invalid format
    const validFormat = isValid(e.target.value);
    if (!validFormat) {
      console.log("input is invalid!");
      setItems([]);
      return;
    }

    if (e.target.value.length === 5) {
      fetch(`http://ctp-zip-api.herokuapp.com/zip/${e.target.value}`).then(
        function (response) {
          if (response.status === 200) {
            response.json().then(function (data) {
              console.log(data);

              //custom object to compose content
              const itemObject = {
                title: "",
                state: "",
                location: "",
                population: "",
                total_wages: "",
              };
              var content = [];

              data.forEach((ele, _) => {
                itemObject.title = ele["LocationText"];
                itemObject.state = ele["State"];
                itemObject.location = `(${ele["Lat"]}, ${ele["Long"]})`;
                itemObject.population = ele["EstimatedPopulation"];
                itemObject.total_wages = ele["TotalWages"];

                content.push(itemObject);
              });

              //update state using hooks
              setItems(content);
            });
          } else {
            setItems([]); //clear array if there is no results
          }
        }
      );
    } else {
      setItems([]); //clear array if input length != 5
    }
  }

  return (
    <div class="container top-margin">
      <div class="col-md-5 mx-auto">
        <SearchField onValueChange={(e) => onValueChange(e)} />
        <RenderItem values={items} />
      </div>
    </div>
  );
};

export default App;

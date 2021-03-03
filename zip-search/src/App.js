import React from 'react';
import './App.css';
import SearchField from "./components/search_field"
import ItemComponent from "./components/item_component"


function App(){
  return (
    <div class="container top-margin">
      <div class="col-md-5 mx-auto">
        <SearchField />
        <ItemComponent />
      </div>
    </div>
  );
}

export default App

import React, { useState } from 'react';
import SelectInput from './components/SelectInput/SelectInput';

const listItems = [
  {name: "Americano", id: 0},
  {name: "Espresso", id: 1},
  {name: "Latte", id: 2},
  {name: "Macchiato", id: 3},
  {name: "Chocolate", id: 4},
  {name: "Milk", id: 5},
  {name: "Americano", id: 6},
  {name: "Espresso", id: 7},
  {name: "Latte", id: 8},
  {name: "Macchiato", id: 9},
  {name: "Chocolate", id: 10},
  {name: "Milk", id: 11},
]

function App() {
  return (
    <div className="container">
      <SelectInput listItems={listItems} color="white" bgColor='black'/>
    </div>
  );
}

export default App;

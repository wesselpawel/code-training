import React, { useState } from 'react';
import './App.css';
import SelectInput from './components/SelectInput';

const listItems = [
  {coffee: "Americano", id: 0},
  {coffee: "Espresso", id: 1},
  {coffee: "Latte", id: 2},
  {coffee: "Macchiato", id: 3},
  {coffee: "Chocolate", id: 4},
  {coffee: "Milk", id: 5},
  {coffee: "Americano", id: 6},
  {coffee: "Espresso", id: 7},
  {coffee: "Latte", id: 8},
  {coffee: "Macchiato", id: 9},
  {coffee: "Chocolate", id: 10},
  {coffee: "Milk", id: 11},
]
function App() {
  return (
    <div className="container">
      <SelectInput listItems={listItems} color="white" bgColor='black'/>
    </div>
  );
}

export default App;

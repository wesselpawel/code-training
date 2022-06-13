import React, { useState } from 'react';
import './App.css';
import SelectInput from './components/SelectInput';

const listItems = [
  {itemName: "Americano", id: 0},
  {itemName: "Espresso", id: 1},
  {itemName: "Latte", id: 2},
  {itemName: "Macchiato", id: 3},
  {itemName: "Chocolate", id: 4},
  {itemName: "Milk", id: 5},
  {itemName: "Americano", id: 6},
  {itemName: "Espresso", id: 7},
  {itemName: "Latte", id: 8},
  {itemName: "Macchiato", id: 9},
  {itemName: "Chocolate", id: 10},
  {itemName: "Milk", id: 11},
]

function App() {
  return (
    <div className="container">
      <SelectInput listItems={listItems} color="white" bgColor='black'/>
    </div>
  );
}

export default App;

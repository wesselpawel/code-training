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
  {coffee: "Americano", id: 0},
  {coffee: "Espresso", id: 1},
  {coffee: "Latte", id: 2},
  {coffee: "Macchiato", id: 3},
  {coffee: "Chocolate", id: 4},
  {coffee: "Milk", id: 5},
]
function App() {
  return (
    <div className="container">
      <SelectInput listItems={listItems} color="white" bgColor='black'/>
    </div>
  );
}

export default App;

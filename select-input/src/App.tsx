import { useState } from 'react';
import FloatingInput from "./components/FloatingInput/FloatingInput";
import SelectInput from './components/SelectInput/SelectInput';
import './index.css'
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


type State = {
  login: string
  password: string
  selected: object
}

function App() {
  const [state, setState] = useState<any>([])
  const handleChange = <T extends keyof State>(prop: T, value: State[T]) => {
    setState({...state, [prop]: value});
};

const updateSelect = (item: object) => {
  setState({...state, selected: item});
  console.log(item)
}

  return (
    <div className="wrapper">
        <FloatingInput>
          <input placeholder="value" type="text" onChange={(e) => handleChange("login", e.target.value)}/>
          <label>Login</label>
        </FloatingInput>
        <FloatingInput>
          <input placeholder="value" type="text" onChange={(e) => handleChange("password", e.target.value)}/>
          <label>Password</label>
        </FloatingInput>
        <SelectInput listItems={listItems} updateSelect={updateSelect}/>
    </div>
  );
}

export default App;

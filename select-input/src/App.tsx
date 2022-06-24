import { useState } from 'react';
import FloatingInput from "./components/FloatingInput/FloatingInput";
import SelectInput from './components/SelectInput/SelectInput';
import './index.css'

// const itemsList = [
//   {name: "Americano", id: 0},
//   {name: "Espresso", id: 1},
//   {name: "Latte", id: 2},
//   {name: "Macchiato", id: 3},
//   {name: "Chocolate", id: 4},
//   {name: "Milk", id: 5},
//   {name: "Americano", id: 6},
//   {name: "Espresso", id: 7},
//   {name: "Latte", id: 8},
//   {name: "Macchiato", id: 9},
//   {name: "Chocolate", id: 10},
//   {name: "Milk", id: 11},
// ]

  const itemsList = [
    "Americano",
    "Espresso",
    "Latte",
    "Macchiato",
    "Chocolate",
    "Milk",
    "Americano",
    "Espresso",
    "Latte",
    "Macchiato",
    "Chocolate",
    "Milk",
  ].map((name, i) => ({name, coffeeId: `${i}`}))


type CredsState = {
  name: string
  pw: string
}

function App() {
  // const [name, setName] = useState('')
  // const [name1, setName1] = useState<string>()

  const [{name, pw}, setCredentials] = useState<CredsState>({name: '', pw: ''})
  const [coffeeId, setCoffeeId] = useState<string>('')

  const handleTextInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCredentials({name, pw, [e.target.name]:e.target.value});
  };

  const handleSelectInput = (coffeeId:string) => {
    setCoffeeId(coffeeId)
    console.log(coffeeId)
  }

  return (
    <div className="wrapper">
        <FloatingInput>
          <input value={name} placeholder="value" type="text" name='name' onChange={handleTextInput}/>
          <label>Login</label>
        </FloatingInput>

        <FloatingInput>
          <input placeholder="value" type="text" name='pw' onChange={handleTextInput}/>
          <label>Password</label>
        </FloatingInput>

        <SelectInput placeholder='Select item' options={itemsList} onSelect={(coffeeId) => handleSelectInput}/>
    </div>
  );
}

export default App;

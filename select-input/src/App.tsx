import { useState } from 'react';
import FloatingInput from "./components/FloatingInput/FloatingInput";
import SelectInput from './components/SelectInput/SelectInput';
import './index.css'
import coffeeBean from './images/coffeeBean.png'

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
  userName: string
  password: string
}

type CoffeeState = {
  coffeeId: string
  name: string
}

function App() {
  // const [name, setName] = useState('')
  // const [name1, setName1] = useState<string>()

  const [{userName, password}, setCredentials] = useState<CredsState>({userName: '', password: ''})
  const [{coffeeId, name}, setCoffeeId] = useState<CoffeeState>({coffeeId: '', name: ''})

  const handleTextInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCredentials({userName, password, [e.target.name]:e.target.value});
  };

  const handleSelectInput = (item: CoffeeState) => {
    setCoffeeId(item)
    console.log(item.coffeeId)
  }
  const submitForm: React.FormEventHandler<HTMLFormElement> = (e) => {
    alert(`Hello ${userName} do you really like ${name}?`)
    e.preventDefault()
  }

  return (
    <>
      <div style={{textAlign:"center", display:"flex", justifyContent:"center"}}>
        <h1 style={{ color:"white",textShadow:"2px 2px blueviolet"}}>Hello coffee lovers<img style={{width:"5%"}} src={coffeeBean} alt=""/></h1>
      </div>
      <div className='wrapper'>
        <form className="form" onSubmit={submitForm} action="">
          <FloatingInput>
            <input required value={userName} placeholder="value" type="text" name='userName' onChange={handleTextInput}/>
            <label>Login</label>
          </FloatingInput>

          <FloatingInput>
            <input required value={password} placeholder="value" type="password" name='password' onChange={handleTextInput}/>
            <label>Password</label>
          </FloatingInput>

          <SelectInput placeholder='Select item' options={itemsList} onSelect={handleSelectInput}/>

          <button className='submitBtn' type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
}

export default App;

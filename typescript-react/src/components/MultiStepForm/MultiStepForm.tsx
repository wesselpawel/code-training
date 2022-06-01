import {useState} from 'react'

export interface FormProps {
    currentStep: number
}

type State = {
    firstName: string
    lastName: string | null
    userName: string
    password: string
}

const initialState: State = {
    firstName: "",
    lastName: "",
    userName: "",
    password: ""
} 

const MultiStepForm = (props: FormProps) => {
    const [state, setState] = useState(initialState)

    const handleChange = <T extends keyof State>(prop: T, value: State[T]) => {
        setState({...state, [prop]: value})
    }
    return (
        <>
                {props.currentStep === 1 ?
                    (
                        <div className="inputs">
                            <label htmlFor="firstName">Firstname:</label>
                            <input type="text" id="firstName" value={state.firstName} onChange={(e) => handleChange("firstName", e.target.value)}/>
                            <label htmlFor="lastName">Lastname:</label>
                            <input type="text" id="lastName" value={state.lastName || ""} onChange={(e) => handleChange("lastName", e.target.value)}/>
                        </div>
                    ) : (
                        <div className="inputs">
                            <label htmlFor="userName">Username:</label>
                            <input type="text" id="userName" value={state.userName} onChange={(e) => handleChange("userName", e.target.value)}/>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" value={state.password} onChange={(e) => handleChange("password", e.target.value)}/>
                        </div>
                    )
                }
        </> 
    )
}

export default MultiStepForm
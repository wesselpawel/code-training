import { useState } from 'react';
import './styles/style.css';

export interface FloatingInput {
    label: string,
    type: string,
    name: string,
}

type State = {
    name: string
}

const FloatingInput = ({label, type, name}: FloatingInput): JSX.Element => {
    const [floating, setFloating] = useState<boolean>(false)
    const inputName:any = name
    const [state, setState] = useState<string[]>([])
    const handleChange = <T extends keyof State>(prop: T, value: State[T]) => {
        setState({...state, [prop]: value});
    };

    return(
        <div className="floating">
            <label className={floating ? "floating__label--active" : "floating__label"} htmlFor={name}>{label}</label>
            <input 
                className="floating__input" 
                name={name} type={type} value=""
                onClick={(): void => setFloating(true)} 
                onBlur={(): void => setFloating(false)}
                onChange={(e) => handleChange(inputName, e.target.value)}
                />
        </div>
    )
}

export default FloatingInput
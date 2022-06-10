import {useState, useEffect} from 'react'

export interface PasswordProps {
    password: string
}

const PassChecker = (props: PasswordProps) => {
    const [strength, setStrength] = useState(0)

    const password = props.password

    const levelOne = password.length >= 6
    const levelTwo = password.includes('!' || '@' || '#' || '$')

    function checkStrenght(){
        if(levelOne){
            setStrength(1)
            if(levelTwo){
                setStrength(2)
            }
        }else{
            setStrength(0)
        }
    }

    useEffect(() => {
        checkStrenght()
    });
        return (
            <div>Strength of password:{strength}</div>
        )
    }
    
export default PassChecker
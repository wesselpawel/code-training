export interface FormProps {
    currentStep: number
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

const MultiStepForm = (props: FormProps) => {
    return (
        <>
                {props.currentStep === 1 ?
                    (
                        <div className="inputs">
                            <label htmlFor="firstName">Firstname:</label>
                            <input type="text" id="firstName" onChange={props.onChange}/>
                            <label htmlFor="lastName">Lastname:</label>
                            <input type="text" id="lastName"/>
                        </div>
                    ) : (
                        <div className="inputs">
                            <label htmlFor="userName">Username:</label>
                            <input type="text" id="userName"/>
                            <label htmlFor="userPass">Password:</label>
                            <input type="password" id="userPass"/>
                        </div>
                    )
                }
        </> 
    )
}

export default MultiStepForm
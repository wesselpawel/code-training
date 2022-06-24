import './styles/style.css';

export default function FloatingInput(props:any){
    const {name = 'dasdfksf', name1='sdfsdf'} = props

    return(

        <div className="floating">
            {name}
            {name1}
            {/* {props.children} */}
        </div>
    )
}


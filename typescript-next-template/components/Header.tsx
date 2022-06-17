import styles from '../styles/Header.module.css'
import SelectInput from './SelectInput'
import ghmark from '../src/ghmark.png'
import Image from 'next/image'

const listItems = [
    {itemName: "Americano", id: 0},
  ]

export default function Header(){
    
    return(
        <div className={styles.header}>
            <div className={styles.logo}>
                <Image src={ghmark} width={40} height={40}/>
                <h1>wesiu.dev</h1>
            </div>
           <SelectInput listItems={listItems} color="white" bgColor='black'/>
        </div>
    )   
}


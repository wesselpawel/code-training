import { useState } from 'react';

export interface Props {
    listItems: { coffee: string, id: number}[]
    color: string
    bgColor: string
}



const SelectInput = (props: Props) => {
    const [selectedItem, selectedItemSet] = useState<{ coffee: string, id: number }>(props.listItems[1])
    const [menuOpened, menuOpenedSet] = useState<boolean>(false)
    const newSelectedItem = (coffee: string, id: number ) => {
        selectedItemSet({coffee, id} )
        menuOpenedSet(false)
    }
    return (
        <div className='wrapper'>
        <h1>Coffee type selected: {selectedItem.coffee} <br /> with id: {selectedItem.id}</h1>
            <div className="select-box">
                <div 
                className="selected-item"
                onClick={() => menuOpenedSet(!menuOpened)}
                >
                    {selectedItem.coffee} 
                    <div className='arrow'> &gt; 
                    </div>
                </div>
                    <div className={menuOpened === true ? 'menu opened' : 'menu closed'}>
                        {props.listItems.map((item, index) =>
                            <div
                                className='item'
                                key={index}
                                onClick={() => newSelectedItem(item.coffee, item.id)}
                            >
                                {item.coffee}
                            </div>
                        )}
                    </div>
            </div>
        </div>
    )
}

export default SelectInput


import { useState } from 'react';

export interface Props {
    listItems: { itemName: string, id: number}[]
    color: string
    bgColor: string
}

const SelectInput = (props: Props) => {
    const [selectedItem, selectedItemSet] = useState<{ itemName: string, id: number }>(props.listItems[0])
    const [menuOpened, menuOpenedSet] = useState<boolean>(false)
    const newSelectedItem = (itemName: string, id: number ) => {
        selectedItemSet({itemName, id} )
        menuOpenedSet(false)
    }
    return (
        <div className='wrapper'>
        <h1>Coffee type selected: {selectedItem.itemName} <br /> with id: {selectedItem.id}</h1>
            <div className="select-box">
                <div
                    className="selected-item"
                    onClick={() => menuOpenedSet(!menuOpened)}
                >
                    {selectedItem.itemName}
                    <div className='arrow'> &gt;
                    </div>
                </div>
                    <div className={menuOpened === true ? 'menu opened' : 'menu closed'}>
                        {props.listItems.map((item, index) =>
                            <div
                                className='item'
                                key={index}
                                onClick={() => newSelectedItem(item.itemName, item.id)}
                            >
                                {item.itemName}
                                {selectedItem.id === item.id ? (<div className="checked-item"></div>) : (undefined)}
                                
                            </div>
                        )}
                    </div>
            </div>
        </div>
    )
}

export default SelectInput


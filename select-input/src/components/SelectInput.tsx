import { useState } from 'react';

// Extract repeated code (from lines 7 and 15)
type ListItem = { name: string, id: number} // the prefix "item" in "itemName" is redundant as the name of the object is alreday "(list)Item"

export interface SelectInputProps {
    listItems: ListItem[]
    color: string
    bgColor: string
}

// Nowadays, most devs destructure props either in the parameters on the first line of component body
// "listItems = []" - default objects/arrays/function values to avoid destructuring errors (e.g. undefined[0]) which crash the app
const SelectInput = ({listItems = [], color, bgColor}: SelectInputProps): JSX.Element => {
    const [selectedItem, setSelectedItem] = useState<ListItem>(listItems[0]) // state setter names begin with "set"
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const selectItem = (item: ListItem ): void => {
        setSelectedItem(item)
        setMenuOpen(false)
    }
    
    const toggleMenuOpen = (): void => setMenuOpen(!menuOpened) // This is not necessary to extract as it's redefined on each render either way; just a matter of code style
    
    return (
        <div className='wrapper'>
            <h1>
                /* Keep "<br/>" for paragraph breaks only; use CSS everywhere else */
                <span className="block">Coffee type selected: {selectedItem.name}</span>
                <span className="block">with id: {selectedItem.id}</span>
            </h1>
            
            <div className="select-box">
                <div
                    className="selected-item"
                    onClick={toggleMenuOpen}
                >
                    {selectedItem.name}
                    <div className='arrow'> &gt;</div>
                </div>
                
                /* Ternary operator coerces types to booleans, so `menuOpen` is equivalent to `menuOpened === true`  */ 
                <div className={menuOpen ? 'menu menu-opened' : 'menu menu-closed'}> /* Look into BEM (quick) */
                    {listItems.map((item, index) =>
                        <div
                            className='item'
                            key={index}
                            onClick={() => selectItem(item)}
                        >
                            {item.name}
                            /* For conditions that fallback on falsey valuues ('undefined', 'false', etc.), you can use "&&" instead of ternary */   
                            /* Childless elements can use self-closing tags, e.g. `<div/>` */          
                            {selectedItem.id === item.id && <div className="checked-item" />}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SelectInput


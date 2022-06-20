import { useState } from 'react';
import './styles/style.css';
// Extract repeated code (from lines 7 and 15)
type ListItem = { name: string, id: number} // the prefix "item" in "itemName" is redundant as the name of the object is alreday "(list)Item"

export interface SelectInputProps {
    listItems: ListItem[]
    color?: string
    bgColor?: string
    updateSelect: (arg: ListItem) => void
}

// Nowadays, most devs destructure props either in the parameters on the first line of component body
// "listItems = []" - default objects/arrays/function values to avoid destructuring errors (e.g. undefined[0]) which crash the app
const SelectInput = ({listItems = [], color, bgColor, updateSelect}: SelectInputProps): JSX.Element => {
    const [selectedItem, setSelectedItem] = useState<ListItem>(listItems[0]) // state setter names begin with "set"
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const selectItem = (item: any): void => {
        setSelectedItem(item)
        setMenuOpen(false)
        updateSelect(item)
    }
    
    const toggleMenuOpen = (): void => setMenuOpen(!menuOpen) // This is not necessary to extract as it's redefined on each render either way; just a matter of code style
    
    return (

            <div className="select">
                <div
                    className="select__chosen"
                    onClick={toggleMenuOpen}
                >
                    {selectedItem.name}
                    <div className='select__arrow'>&gt;</div>
                </div>
                
                {/*Ternary operator coerces types to booleans, so `menuOpen` is equivalent to `menuOpened === true`*/}
                <div className={menuOpen ? 'select__menu--opened' : 'select__menu'}> {/* Look into BEM (quick) */}
                    {listItems.map((item, index) =>
                        <div
                            className='select__item'
                            key={index}
                            onClick={() => selectItem(item)}
                        >
                            {item.name}
                            {/* For conditions that fallback on falsey valuues ('undefined', 'false', etc.), you can use "&&" instead of ternary */}   
                            {/* Childless elements can use self-closing tags, e.g. `<div/>` */}    
                            {selectedItem.id === item.id && <div className="select__item--checked" />}
                        </div>
                    )}
                </div>
            </div>

    )
}

export default SelectInput


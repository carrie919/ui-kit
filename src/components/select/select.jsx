import React, { useState } from 'react';

import './select.css';

const Select = ({
    label,
    value,
    placeholder,
    dropdownMenu,
    handleItemSelect,
    clearSelectInput,
    handleChange
}) => {
    const [isMenuDropped, setIsMenuDropped] = useState(false);
    const [isFocused, setIsFocused] = useState(false)

    const displayMenu = () => {
        setIsMenuDropped(!isMenuDropped)
    }

    const handleFocus = (e) => {
        setIsFocused(true)
    }

    const handleBlur = (e) => {
        setIsFocused(false)
    }

    return (
        <div className={`custom-select${isMenuDropped ? ' menu-dropped' : ''}`}>
            {
                label ? (
                    <label
                        className={
                            `select-input-label${isFocused || value || placeholder ? ' shrink' : ''}`
                        }
                    >
                        {label}
                    </label>
                ) : null
            }
            <input
                type="search"
                className='select'
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                readOnly
            />
            {
                value ? 
                (<buttom className='clear-select cus-sel-but' onClick={clearSelectInput}></buttom>)
                : null
            }
            <button className='dropdown-button cus-sel-but' onClick={displayMenu}></button>
            <div className='dropdown-menu'>
                {
                    dropdownMenu.map((menuItem, index) => (
                        <span
                            key={index}
                            className={`dropdown-menu-item${ menuItem === value ? ' selected' : ''}`}
                            onClick={handleItemSelect}
                        >
                            {menuItem}
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default Select;
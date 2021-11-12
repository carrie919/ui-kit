import React, { useState } from 'react';

import './select.css';

const Select = ({ dropdownMenu }) => {
    const [isMenuDropped, setIsMenuDropped] = useState(false)

    const handleDropdown = () => {
        setIsMenuDropped(!isMenuDropped)
    }

    return (
        <div className={`custom-select${isMenuDropped ? ' menu-dropped' : ''}`}>
                <input
                    type="search"
                    className='select'
                />
                <buttom className='clear-select cus-sel-but'></buttom>
                <button className='dropdown-button cus-sel-but' onClick={handleDropdown}></button>
                <div className='dropdown-menu'>
                    {
                        dropdownMenu.map((result, index) => (
                            <span
                                key={index}
                                className='dropdown-menu-item'
                            >
                                {result}
                            </span>
                        ))
                    }
                </div>
            </div>
    )
}

export default Select;
import React, { useState } from 'react';

import './select-tag.css';

import Tag from '../tag/tag';

const SelectTag = ({ label, selectedTagsList, clearSelectInput, dropdownMenu, handleItemSelect }) => {
    const [isMenuDropped, setIsMenuDropped] = useState(false);

    const displayMenu = () => {
        setIsMenuDropped(!isMenuDropped)
    }
    return (
        <div className={`custom-select-tag${isMenuDropped ? ' menu-dropped' : ''}`}>
            <div className='selected-tags'>
                {
                    selectedTagsList ? (
                        selectedTagsList.map((tag, index) => {
                            return <Tag key={index} label={tag} variant='primary' size='small' />
                        })
                    ) : (
                        <span className='select-tags-input-label'>{label}</span>
                    )
                }
            </div>
            {
                selectedTagsList ? (
                    <buttom
                        className='clear-select-tags cus-sel-tag-but'
                        onClick={clearSelectInput}
                    ></buttom>
                ) : null
            }
            <button className='dropdown-button cus-sel-tag-but' onClick={displayMenu}></button>
            <div className='dropdown-menu'>
                {
                    dropdownMenu.map((menuItem, index) => (
                        <span
                            key={index}
                            className={`dropdown-menu-item`}
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

export default SelectTag;
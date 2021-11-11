import React from 'react';

import './checkbox.css';

const CustomCheckbox = ({ id, name, value, label, isChecked }) => (
    <label htmlFor={id} className='custom-checkbox'>
        <input
            id={id}
            type='checkbox'
            name={name}
            value={value}
            { ...isChecked ? {defaultChecked: true} : null }
        >
        </input>
        {label}
        <span className="checkmark"></span>
    </label>
);

export default CustomCheckbox;
import React from 'react';

import './radio.css'

const Radio = ({label, name}) => (
    <label className='custom-radio' on>{label}
        <input className='radio-input' type='radio' name={name}/>
        <span className='radio-checkmark'></span>
    </label>
)

export default Radio;
import React from 'react';

import './toogle.css';

import { ReactComponent as CheckMark } from '../../assets/checkmark.svg';

const Toogle = ({ isOn, label, handleClick }) => {
    const onOrOff = isOn ? 'on' : 'off'
    return (
        <div className='custom-toogle'>
            <div className={`my-toogle container-${onOrOff}`} onClick={handleClick}>
                <span className='toogle-circle first-circle'>
                    <CheckMark height='16px' width='16px' fill={onOrOff === 'on' ? 'white' : '#6341E2'} />
                </span>
                <span className='toogle-circle'>
                    <span className={`inner-circle inner-${onOrOff}`}></span>
                </span>
            </div>
            <span className='toogle-label'>{label}</span>
        </div>
    )
}

export default Toogle;
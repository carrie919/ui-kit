import React, {useState} from 'react';

import './tag.css';

import { ReactComponent as Del } from '../../assets/cross.svg'

const Tag = ({ label, variant, size }) => {
    const [isHovered, setIsHovered] = useState(false);
    const myColor = (variant === 'primary') ? ('white') : (isHovered ? 'black' : '#808080');
    const myFun = () => {
        setIsHovered(!isHovered)
    }

    const sizeMedium = {
        height: '16px',
        width: '46px'
    }

    const sizeSmall = {
        height: '14px',
        width: '42px',
        padding: '1px 3px'
    }

    return(
    <span
        className={`custom-tag ${variant}`}
        onMouseEnter={myFun}
        onMouseLeave={myFun}
        style={
            size === 'medium' ? sizeMedium : 
            size === 'small' ? sizeSmall : null
        }
    >
        {label}
        <Del fill={myColor} height='12px' width='12px'/>
    </span>
)}

export default Tag;
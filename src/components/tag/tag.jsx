import React, {useState} from 'react';

import './tag.css';

const Tag = ({ label, variant, size }) => {
    const [isHovered, setIsHovered] = useState(false);
    const myFun = () => {
        setIsHovered(!isHovered)
    }

    return(
    <span
        className={`custom-tag ${variant} ${size}`}
        onMouseEnter={myFun}
        onMouseLeave={myFun}
    >
        {label}
    </span>
)}

export default Tag;
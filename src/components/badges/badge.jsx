import React from 'react';

import './badge.css'

const Badge = ({variant, content}) => {
    return(
        <span
            className={
                variant ? (`badge ${variant}`) : 'badge'
            }
        >{content}</span>
    )
}

Badge.defaultProps = {
    content: 'my badge'
}

export default Badge;
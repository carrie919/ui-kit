import React from 'react';

import './tooltip.css';

const Tooltip = ({ leftOrRight, topOrBottom, label}) => {
    let myClass = (leftOrRight && topOrBottom) ? `${topOrBottom} ${leftOrRight}`: `side-${leftOrRight}`

    return(
        <span
            className={`custom-tooltip ${myClass}`}
        >
            {label}
        </span>
    )
}

export default Tooltip;
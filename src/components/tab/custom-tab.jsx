import React from 'react';

import './custom-tab.css';

const CustomTab = (props) => {
    const { activeTab, label, handleClick, variant } = props;
    let className = `tab-list-item ${variant}`;

    className = activeTab === label ? className + ' active-tab' :  className;

    return (
        <li
            className={className}
            onClick={() => handleClick(label)}
        >
            {label}
        </li>
    );
}

export default CustomTab;
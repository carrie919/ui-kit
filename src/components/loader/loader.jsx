import React from 'react';

import './loader.css';

const Loader = ({customClass}) => (
    <span className={`custom-loader ${customClass}`}>
        <span className='load-slider'></span>
    </span>
)

export default Loader;
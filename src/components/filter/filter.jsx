import React from 'react';

import './filter.css';

const CustomFilter = ({ options, handler }) => {
    console.log(options);
    return(
        <ul className='custom-filter-options'>
            {
                options.map((option, index, array) => {
                    return (
                        <li
                            className={
                                index === 0 ? 'filter-option first' : 
                                (index === array.length - 1 ? 'filter-option last' : 'filter-option')
                            }
                            key={index}
                            onClick={handler}
                        >
                                {option}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default CustomFilter
import React, { useState } from 'react';

import './search.css';

const Search = ({ placeholder, handler, searchResults }) => {


    return (
        <div className='custom-search'>
            <input
                className='search'
                type='search'
                placeholder={placeholder}
                onChange={handler}
            >
            </input>
            {
                searchResults ? (
                    <ul className='search-results-container'>
                        {
                            searchResults.map(result => {
                                return <li className='search-result'>{result}</li>
                            })
                        }
                    </ul>
                ) : null
            }
        </div>
    )
}

export default Search;
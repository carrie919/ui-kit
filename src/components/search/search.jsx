import React, { useState } from 'react';

import './search.css';

import Loader from '../loader/loader';

const Search = ({ value, placeholder, handler, clearInput, searchResultClick, searchResults }) => {

    return (
        <div className='custom-search'>
            <div className='input-wrapper'>
                <input
                    className='search'
                    type='search'
                    value={value}
                    placeholder={placeholder}
                    onChange={handler}
                >
                </input>
                <button className='clear-search' onClick={clearInput}></button>
            </div>
            {
                searchResults ? (
                    <div className='search-results-container'>
                        {
                            searchResults.map((result, index) => (
                                result.length !== 0 ? (
                                    <span
                                        key={index}
                                        className='search-result'
                                        style={result === 'no results' ? { color: 'gray' } : null}
                                        onClick={searchResultClick}
                                    >
                                        {result}
                                    </span>
                                ) : <Loader customClass='loading' />
                            ))
                        }
                    </div>
                ) : null
            }
        </div>
    )
}

export default Search;
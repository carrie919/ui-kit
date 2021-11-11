import React, { useState } from 'react';

import './input.css';

const CustomInput = ({ handleChange, label, error, success, description, ...otherProps }) => {
    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = (e) => {
        setIsFocused(true)
    }

    const handleBlur = (e) => {
        setIsFocused(false)
    }

    const { value, disabled, placeholder} = otherProps;

    return (
        <div className='i-err-container'>
            <div
                className='input-container'
                style={
                    success ? { backgroundColor: 'rgb(215, 250, 215)' } :
                    error ? { backgroundColor: '#f9e3e3' } : null
                }
            >
                {
                    label ? (
                        <label
                            className={
                                `custom-input-label${isFocused || value || placeholder ? ' shrink' : ''}`
                            }
                        >
                            {label}
                        </label>
                    ) : null
                }
                <input
                    className='custom-input'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    {...otherProps}
                    style={
                        disabled ? { color: 'gray' } :
                        success ? { backgroundColor: 'rgb(215, 250, 215)' } :
                        error ? { backgroundColor: '#f9e3e3' } : null
                    }
                />
            </div>
            <span className='input-err-msg'>
                {
                    error ? error.message : null
                }
            </span>
            {
                description ? <span className='input-desc'>{ description }</span> : null
            }
        </div>
    )
}

export default CustomInput;
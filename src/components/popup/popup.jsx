import React from 'react';

import './popup.css'

import CustomButton from '../button/Button';
import { ReactComponent as AlertIcon } from '../../assets/exclamation-lg.svg';
import { ReactComponent as CheckMark } from '../../assets/checkmark.svg';
import { ReactComponent as Error } from '../../assets/cross.svg';
import CustomInput from '../input/input';

const Popup = ({ head, description, label, popupType, handleLabel }) => {
    return (
        <div className='custom-popup'>
            <div
                className='popup-head'
                style={
                    popupType.type ? { alignItems: 'flex-start' } : null
                }
            >
                {
                    popupType.type ? null : (
                        <div className={`popup-icon ${popupType}`}>
                            {
                                popupType === 'alert' ? <AlertIcon /> :
                                    popupType === 'success' ? <CheckMark /> :
                                        popupType === 'error' ? <Error /> : null
                            }
                        </div>
                    )
                }
                <div
                    className='popup-content' style={
                        popupType.type ? { textAlign: 'start' } : null
                    }
                >
                    {
                        head ? <h2 className='popup-content-heading'>{head}</h2> : null
                    }
                    {
                        description ? <p className='popup-content-desc'>{description}</p> : null
                    }
                </div>
                {
                    popupType.type ? (
                        <div className='popup-input-fields'>
                            {
                                popupType.fields.map((field) => {
                                    return <CustomInput type={field.type} label={field.label} />
                                })
                            }
                        </div>
                    ) : null
                }
                <div className='popup-close'>
                    <CustomButton variant='primary' icon='del' isButtonCircle />
                </div>
            </div>
            <div
                className='popup-buttons'
                style={
                    popupType.type ? { justifyContent: 'flex-start' } : null
                }
            >
                {
                    popupType === 'alert' ?
                        [<CustomButton variant='primary' label={label} handleClick={handleLabel} />,
                        <CustomButton variant='secondary' label='cancel' />] :
                        popupType === 'success' ?
                            <CustomButton variant='primary' label={label} handleClick={handleLabel} /> :
                            null

                }
                {
                    popupType.type ? <CustomButton variant='primary' label='send' /> : null
                }
            </div>
        </div>
    )
}

export default Popup;
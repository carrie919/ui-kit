import React from 'react';

import './notification.css'

import CustomButton from '../button/Button';
import { ReactComponent as Checkmark } from '../../assets/notification-checkmark.svg';
import { ReactComponent as Information } from '../../assets/information.svg';
import { ReactComponent as Cross } from '../../assets/cross.svg';

const CustomNotification = ({ head, description, buttonsExist, iconType }) => {
    return (
        <div className='custom-notification'>
            <div className='notification-head'>
                <div className='notification-content'>
                    {
                        head ? <h3 className='notification-content-heading'>{head}</h3> : null
                    }
                    {
                        description ? <p className='notification-content-desc'>{description}</p> : null
                    }
                </div>
                <div className={`notification-icon ${iconType}`}>
                    {
                        iconType === 'success' ? <Checkmark /> :
                            iconType === 'info' ? <Information /> : 
                                iconType === 'error' ?<Cross /> : null
                    }
                </div>
            </div>
            <div className='notification-buttons'>
                {
                    buttonsExist ? [<CustomButton variant='secondary' label='close' />,
                    <CustomButton variant='flat' label='help' />] : null
                }
            </div>
        </div>
    )
}

export default CustomNotification;
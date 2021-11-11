import React from 'react';

import './button.css';

import { ReactComponent as Plus } from '../../assets/plus-lg.svg';
import { ReactComponent as Xmark } from '../../assets/x-mark.svg';

const CustomButton = ({handleClick, variant, label, icon, isButtonCircle, ...props }) => {
  
  return (
    <button
      type="button"
      className={`custom-button ${variant}`}
      onClick={handleClick}
      style={
        isButtonCircle ? (
          {
            borderRadius: '20px'
          }
        ) : null
      }
      {...props}
    >
      {
        icon === 'add' ? <Plus className='logo-inside-button'/> : 
        icon === 'del' ? <Xmark className='logo-inside-button'/> : null
      }

      { label ? <span className='button-label'>{label}</span> : null}
      
    </button>
  );
};

CustomButton.defaultProps = {
  variant: 'primary',
  label: '',
  isButtonCircle: false
};

export default CustomButton;
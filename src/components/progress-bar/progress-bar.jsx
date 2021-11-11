import React from 'react';

import './progress-bar.css';

const ProgressBar = ({ height, percentageDone, bgColor }) => { 
    return (
        <div
            className="progress-bar"
            style={
                { height: height }
            }
        >
            <div
                className="amount-done"
                style={
                    {
                        width: `${percentageDone}%`,
                        backgroundColor: bgColor
                    }
                }
            >
            </div>
        </div>
    )
}

export default ProgressBar;
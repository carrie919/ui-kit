import React, { useState, useRef, useEffect } from 'react';

import './drag-n-drop.css';

const DragAndDrop = ({updateFilesCb}) => {
    const fileUploadField = useRef(null);

    useEffect(() => {
        const uploadField = fileUploadField.current;

        uploadField.addEventListener('dragenter', handleDragEnter);
        uploadField.addEventListener('dragleave', handleDragLeave);
        uploadField.addEventListener('dragover', handleDragOver);
        uploadField.addEventListener('drop', handleDrop);

        return () => {
            uploadField.removeEventListener('dragenter', handleDragEnter);
            uploadField.removeEventListener('dragleave', handleDragLeave);
            uploadField.removeEventListener('dragover', handleDragOver);
            uploadField.removeEventListener('drop', handleDrop);
        }
    });

    const handleDragEnter = (event) => {
        event.preventDefault();
        event.stopPropagation();

        event.target.style.background = '#6e41e2';
        event.target.style.zIndex = 9999;
    }

    const handleDragLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();

        event.target.style.background = '';
    }

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
    }

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (event.dataTransfer.files.length > 0) {
            updateFilesCb(event.dataTransfer.files);
        }
        event.target.style.background = '';
    }

    return (
        <div className='drag-and-drop-area' ref={fileUploadField}>

        </div>
    )
}

export default DragAndDrop;
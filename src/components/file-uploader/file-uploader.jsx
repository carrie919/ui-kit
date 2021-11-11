import React, { useState } from 'react';
import axios from 'axios';

import DragAndDrop from './drag-n-drop';
import ProgressBar from '../progress-bar/progress-bar';

import './file-upload.css';

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 5000000;

const FileUploader = ({
    uploadApi,
    maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
    customAvatar
}) => {
    const [selectedFile, setSelectedFile] = useState();
    const [percentageUploaded, setPercentageUploaded] = useState('notUploading');
    const [report, setReport] = useState(null);

    const changeHandler = (event) => {
        let file = event.target.files[0];
        handleFileDirection(file);
    };

    const updateFilesCb = (file) => {
        console.log(file[0]);
        handleFileDirection(file[0]);
    }

    const handleFileDirection = (file) => {
        if (file.size > maxFileSizeInBytes) {
            setReport('The file weighs more than 5MB')
        } else {
            setSelectedFile(file);
            handleSubmission()
        }
    }

    const handleSubmission = () => {
        setPercentageUploaded(0);

        const options = {
            onUploadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent;
                let percent = Math.floor((loaded * 100) / total)
                console.log(`${loaded}kb of ${total}kb | ${percent}%`);

                if (percent < 100) {
                    setPercentageUploaded(percent)
                }
            }
        }

        let formData = new FormData();
        formData.append('name', 'image');
        formData.append('myFile', selectedFile);

        axios.post(
            uploadApi, formData, options
        ).then(
            (response) => {
                console.log('Success: ', response)
                setPercentageUploaded(100);
                setReport('file uploaded successfully');
                setTimeout(() => {
                    setPercentageUploaded('notUploading');
                }, 1000);
            }
        ).catch(
            (error) => {
                console.log('Failure: ', error)
                setReport('An error has occured, upload file again');
                setPercentageUploaded('notUploading')
            }
        );
    };

    return (
        <div className='file-upload'>
            <div className='drag-and-drop-container'>
                <DragAndDrop updateFilesCb={updateFilesCb} />
            </div>
            <div className='browse-report-container'>
                <div className='browse-btn-container'>
                    <label htmlFor='btn-for-file-upload' className='input-btn-label'>
                        select file
                        <input
                            id='btn-for-file-upload'
                            type='file'
                            title=''
                            name='file'
                            onChange={changeHandler}
                            multiple
                        />
                    </label>
                    <span className='instruction-area'>or drag in form</span>
                </div>
                <span className={report ? 'stuff-des upload-report' : 'stuff-des'}>
                    {
                        report ? `${report}` : 'Can upload PNG,jpeg,gif,svg file up to 5MB'
                    }
                </span>
            </div>
            <div className='avatar-container'>
                {
                    customAvatar ? <img src={customAvatar} className='custom-avatar' /> : null
                }
            </div>
            {
                percentageUploaded !== 'notUploading' ?
                    (<ProgressBar
                        height='5px'
                        bgColor='blue'
                        percentageDone={percentageUploaded}
                    />) : null
            }
        </div>
    )
}

export default FileUploader;
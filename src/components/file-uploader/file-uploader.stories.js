import React from 'react';

import FileUploader from './file-uploader';

export default {
    title: 'FileUploader',
    component: FileUploader
}

const Template = (args) => <FileUploader {...args}/>

export const fileUploader = Template.bind({})
fileUploader.args = {
    uploadApi: '',
    maxFileSizeInBytes: 5000000,
    customAvatar: 'https://robohash.org/QQY.png?set=set5'
}
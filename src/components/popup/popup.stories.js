import React from 'react';

import Popup from './popup';

export default {
    title: 'Popup'
}

const Template = (args) => <Popup {...args} />

export const alertPopup = Template.bind({});
alertPopup.args = {
    head: 'Do you want to delete?',
    description: `you can't restore this file`,
    label: 'delete',
    popupType: 'alert'
}

export const SuccessPopup = Template.bind({});
SuccessPopup.args = {
    head: 'Fele deleted',
    description: `that's all:)`,
    label: 'Okay, thank you',
    popupType: 'success'
}

export const ErrorPopup = Template.bind({});
ErrorPopup.args = {
    head: 'Error',
    description: 'sorry',
    popupType: 'error'
}

export const inputPopup = Template.bind({});
inputPopup.args = {
    head: 'Leave yout contact',
    description: 'we would like to know all about you',
    popupType: {
        type: 'input',
        fields: [
            {
                type: 'text',
                label: 'Your name'
            },
            {
                type: 'number',
                label: 'Your phone'
            },
            {
                type: 'text',
                label: 'Your country'
            }
        ]
    }
}
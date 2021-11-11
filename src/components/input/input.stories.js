import React from 'react';

import CustomInput from './input';

export default {
    title: 'Inupt',
    component: CustomInput
}

const Template = (args) => <CustomInput {...args}/>

export const primaryInput = Template.bind({});
primaryInput.args = {
    type:'text',
    label: 'Your name',
    value: 'Uthred',
    placeholder: 'Example Name',
    readOnly: false,
    disabled: false,
}

export const errorInput = Template.bind({});
errorInput.args = {
    type:'text',
    label: 'Your name',
    value: 'chang wook',
    placeholder: 'Example Name',
    error: {message: 'enter valid username'}
}

export const successInput = Template.bind({});
successInput.args = {
    type:'text',
    label: 'Your name',
    value: 'Jin Hyuk',
    placeholder: 'Example Name',
    success: true
}

export const descInput = Template.bind({});
descInput.args = {
    type:'text',
    label: 'username',
    value: 'jerreimaguire101',
    description: 'username should not contain spaces'
}
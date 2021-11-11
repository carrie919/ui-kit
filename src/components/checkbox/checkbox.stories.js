import React from 'react';

import CustomCheckbox from './checkbox';

export default {
    title: 'Checkbox',
    component: CustomCheckbox
}

const Template = (args) => <CustomCheckbox {...args} />

export const checkBox = Template.bind({});
checkBox.args = {
    id: 'checkbox',
    name: 'name',
    value: 'value',
    label: 'Text'
}
import React from 'react';

import Toogle from './toogle';

export default {
    title: 'Toogle',
    component: Toogle
}

const Template = (args) => <Toogle {...args} />

export const customTemplate = Template.bind({});
customTemplate.args = {
    isOn: false,
    label: 'Dark Mode'
}
import React from 'react';

import Radio from './radio';

export default {
    title: 'Radio',
    component: Radio
}

const Template =  (args) => <Radio {...args}/>

export const customRadio = Template.bind({});
customRadio.args = {
    label: 'Soccer',
    name: 'game'
}
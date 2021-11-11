import React from 'react';

import CustomFilter from './filter';

export default {
    title: 'Filter',
    component: CustomFilter
}

const Template =  (args) => <CustomFilter {...args} />

export const filterMenu = Template.bind({});
filterMenu.args = {
    options: ['coffe', 'tea', 'water'],
    handler: null
}
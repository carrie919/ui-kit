import React, { Component } from 'react';

import Select from './select';

export default {
    title: 'Select',
    component: Select
}

const Template = (args) => <Select {...args} />

export const customSelect = Template.bind({});
customSelect.args = {
    dropdownMenu: [ 'Thailand', 'Germany', 'Canada', 'Brasil' ]
}
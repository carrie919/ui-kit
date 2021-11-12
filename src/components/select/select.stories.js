import React, { Component } from 'react';

import Select from './select';

export default {
    title: 'Select',
    component: Select
}

const Template = (args) => <Select {...args} />

export const customSelect = Template.bind({});
customSelect.args = {
    label: 'Your country',
    value:'Germany',
    placeholder: 'Example Russia',
    dropdownMenu: [ 'Thailand', 'Germany', 'Canada', 'Brasil' ],
    handleChange: (e) => {
        console.log(e.target.value)
    }
}
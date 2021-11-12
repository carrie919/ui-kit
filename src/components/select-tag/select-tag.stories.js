import React from 'react';

import SelectTag from './select-tag';

export default {
    title: 'Select tags',
    component: SelectTag
}

const Template = (args) => <SelectTag {...args} />

export const customSelectTags = Template.bind({});
customSelectTags.args = {
    label: 'Your Country',
    dropdownMenu: ['India', 'China', 'Spain', 'French', 'USA', 'Belgium', 'Sweden', 'Spain'],
    selectedTagsList: ['USA', 'Belgium', 'Sweden', 'Spain', 'India']
}

export const noSelectedTags = Template.bind({});
noSelectedTags.args = {
    label: 'Your Country',
    dropdownMenu: ['India', 'China', 'Spain', 'French'],
}
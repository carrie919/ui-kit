import React from 'react';

import Search from './search';

export default {
    title: 'Search',
    component: Search
}

const Template = (args) => <Search {...args} />

export const customSearch = Template.bind({});
customSearch.args = {
    placeHolder: 'Search',
    searchResults: ['indian food near me', 'indiana football', 'indiana football schedule']
}
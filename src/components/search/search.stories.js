import React from 'react';

import Search from './search';

export default {
    title: 'Search',
    component: Search
}

const Template = (args) => <Search {...args} />

export const customSearch = Template.bind({});
customSearch.args = {
    value: 'india',
    placeHolder: 'Search',
    searchResults: ['indian food near me', 'indiana football', 'indiana football schedule'],
    handler: (e) => {
        console.log(e.target.value)
    }
}

export const noResultSearch = Template.bind({});
noResultSearch.args = {
    value: 'Rus',
    placeHolder: 'Search',
    searchResults: ['no results'],
    handler: (e) => {
        console.log(e.target.value)
    }
}

export const loadingSearch = Template.bind({});
loadingSearch.args = {
    value: 'Rus',
    placeHolder: 'Search',
    searchResults: ['', '', ''],
    handler: (e) => {
        console.log(e.target.value)
    }
}
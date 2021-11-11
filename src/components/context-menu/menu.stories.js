import React from 'react';

import CustomContextMenu from './customContextMenu';

export default {
    title: 'ContextMenu',
    component: CustomContextMenu
}

const menu = [
    { id: 0, opt: 'Brazil' },
    { id: 1, opt: 'India' },
    { id: 2, opt: 'USA' },
    { id: 3, opt: 'Germeny' },
    { id: 4, opt: 'South Korea' }
]

const Template = (args) => <CustomContextMenu {...args}/>

export const contextMenu = Template.bind({})
contextMenu.args = {
    menuItems: menu,
    storyBook: 'given'
}
import React from 'react';

import CustomTab from './custom-tab';

export default {
    title: 'Tab',
    component: CustomTab
}

const Temaplate = (args) => <CustomTab {...args} />

export const primaryTab = Temaplate.bind({});
primaryTab.args = {
    variant: 'primary',
    activeTab: 'The k2',
    label: 'The k2',
    handleClick: (tabLabel) => console.log(tabLabel)
}
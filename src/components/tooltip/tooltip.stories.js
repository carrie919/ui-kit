import React from 'react';

import Tooltip from './tooltip';

export default {
    title: 'Tooltip',
    component: Tooltip
}

const Template = (args) => <Tooltip {...args} />

export const customTooltip = Template.bind({});
customTooltip.args = {
    label: 'Mr. Sunshine',
    leftOrRight: 'left',
    topOrBottom: 'top'
}
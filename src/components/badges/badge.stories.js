import React from 'react';

import Badge from './badge';

export default {
    title: 'Badge',
    component: Badge
}

const Template = (args) => <Badge {...args}></Badge>

export const DefaultBadge = Template.bind({});
DefaultBadge.args = {
    content: 'my badge'
}

export const PrimaryBadge = Template.bind({});
PrimaryBadge.args = {
    variant: 'primary',
    content: 'my badge'
}

export const SecondaryBadge = Template.bind({});
SecondaryBadge.args = {
    variant: 'secondary',
    content: 'my badge'
}
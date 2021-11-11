import React from 'react';

import Tag from './tag';

export default {
    title: 'Tag',
    component: Tag
}

const Temaplate = (args) => <Tag {...args} />

export const customTag = Temaplate.bind({});
customTag.args = {
    variant: 'white',
    size: 'small',
    label: 'Tag'
}
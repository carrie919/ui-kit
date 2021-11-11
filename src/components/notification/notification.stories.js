import React from 'react';

import CustomNotification from './notification';

export default {
    title: 'Notification',
    component: CustomNotification
}

const Template = (args) => <CustomNotification {...args} />

export const HeadDestButtons = Template.bind({});
HeadDestButtons.args = {
    head: 'Verification',
    description: 'we have sent verification link',
    buttonsExist: true,
    iconType: 'info'
}
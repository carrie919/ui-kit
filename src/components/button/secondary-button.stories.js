import React from 'react';

import CustomButton from './Button';

export default {
  title: 'Button/Secondary',
  component: CustomButton
}

const Template = (args) => <CustomButton {...args}></CustomButton> ;

export const SecondaryLabel = Template.bind({});
SecondaryLabel.args = {
  variant:  'secondary',
  label: 'Button'
};

export const SecondaryLabelIcon = Template.bind({});
SecondaryLabelIcon.args = {
  variant:  'secondary',
  label: 'Button',
  icon: 'add'
}

export const SecondaryIcon = Template.bind({});
SecondaryIcon.args = {
  variant:  'secondary',
  icon: 'add'
}

export const SecondaryIconCircle = Template.bind({});
SecondaryIconCircle.args = {
  variant:  'secondary',
  icon: 'add',
  isButtonCircle: true
}
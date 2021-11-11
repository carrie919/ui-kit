import React from 'react';

import CustomButton from './Button';

export default {
  title: 'Button/Primary',
  component: CustomButton
}

const Template = (args) => <CustomButton {...args}></CustomButton> ;

export const PrimaryLabel = Template.bind({});
PrimaryLabel.args = {
  variant: 'primary',
  label: 'Button'
};

export const PrimaryLabelIcon = Template.bind({});
PrimaryLabelIcon.args = {
  variant: 'primary',
  label: 'Button',
  icon: 'add'
}

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
  variant: 'primary',
  icon: 'add'
}

export const PrimaryIconCircle = Template.bind({});
PrimaryIconCircle.args = {
  variant: 'primary',
  icon: 'add',
  isButtonCircle: true
}
import React from 'react';

import CustomButton from './Button';

export default {
  title: 'Button/Flat',
  component: CustomButton
}

const Template = (args) => <CustomButton {...args}></CustomButton> ;

export const FlatLabel = Template.bind({});
FlatLabel.args = {
  variant: 'flat',
  label: 'Button'
};

export const FlatLabelIcon = Template.bind({});
FlatLabelIcon.args = {
  variant: 'flat',
  label: 'Button',
  icon: 'add'
}

export const FlatIcon = Template.bind({});
FlatIcon.args = {
  variant: 'flat',
  icon: 'add'
}

export const FlatIconCircle = Template.bind({});
FlatIconCircle.args = {
  variant: 'flat',
  icon: 'add',
  isButtonCircle: true
}
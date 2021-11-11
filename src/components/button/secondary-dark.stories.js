import React from 'react';

import CustomButton from './Button';

export default {
  title: 'Button/SecondaryDark',
  component: CustomButton
}

const Template = (args) => <CustomButton {...args}></CustomButton> ;

export const SecondaryDarkLabel = Template.bind({});
SecondaryDarkLabel.args = {
  variant: 'secondary-dark',
  label: 'Button'
};

export const SecondaryDarkLabelIcon = Template.bind({});
SecondaryDarkLabelIcon.args = {
  variant: 'secondary-dark',
  label: 'Button',
  icon: 'add'
}

export const SecondaryDarkIcon = Template.bind({});
SecondaryDarkIcon.args = {
  variant: 'secondary-dark',
  icon: 'add'
}

export const SecondaryDarkIconCircle = Template.bind({});
SecondaryDarkIconCircle.args = {
  variant: 'secondary-dark',
  icon: 'add',
  isButtonCircle: true
}
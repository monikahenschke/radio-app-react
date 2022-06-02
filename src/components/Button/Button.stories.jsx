import React from 'react';
import Button from './Button';
import { ReactComponent as IconComponent } from '../../images/play-large.svg';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    iconOnly: {
      defaultValue: false,
    },
    children: {
      defaultValue: 'Button',
    },
    size: {
      options: ['small', 'big', 'default'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: undefined,
};

export const Icon = Template.bind({});
Icon.args = {
  onClick: undefined,
  size: 'big',
  icon: IconComponent,
  iconOnly: true,
};

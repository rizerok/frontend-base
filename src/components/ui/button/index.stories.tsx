import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UiButton from './index';

export default {
  component: UiButton,
  title: 'UiButton'
} as ComponentMeta<typeof UiButton>;

const Template: ComponentStory<typeof UiButton> = (args) => <UiButton {...args} />;

export const HelloButton = Template.bind({});
HelloButton.args = {
  children: 'Hello Button'
};

export const WithSomeEmoji = Template.bind({});
WithSomeEmoji.args = {
  children: '😀 😎 👍 💯'
};

import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import PageSvgCheck from '.';

export default {
  component: PageSvgCheck,
  title: 'PageSvgCheck'
} as ComponentMeta<typeof PageSvgCheck>;

const Template: ComponentStory<typeof PageSvgCheck> = (args) => <PageSvgCheck {...args} />;

export const Default = Template.bind({});

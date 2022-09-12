import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withWorkLayout } from 'sbook/decorators';
import UiRow from '.';

export default {
  component: UiRow,
  title: 'UiRow',
  decorators: [withWorkLayout]
} as ComponentMeta<typeof UiRow>;

const Template1: ComponentStory<typeof UiRow> = () => (
  <>
    <UiRow indent="10px"> Row </UiRow>
    <UiRow indent="10px"> Row </UiRow>
    <UiRow indent="10px"> Row </UiRow>
  </>
);

const Template2: ComponentStory<typeof UiRow> = () => (
  <>
    <UiRow indent="50px"> Row </UiRow>
    <UiRow indent="50px"> Row </UiRow>
    <UiRow indent="50px"> Row </UiRow>
  </>
);

export const RowsWithIndent10px = Template1.bind({});

export const RowsWithIndent50px = Template2.bind({});

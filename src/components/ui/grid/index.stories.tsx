import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { withWorkLayout } from 'sbook/decorators';
import UiGrid from '.';
import UiGridCell from './cell';

const data = Array(7).fill(0).map((e, i) => i + 1);

export default {
  component: UiGrid,
  title: 'UiGrid',
  decorators: [withWorkLayout]
} as ComponentMeta<typeof UiGrid>;

const Template1: ComponentStory<typeof UiGrid> = () => (
  <UiGrid
    indent={8}
    column={4}
  >
    { data.map((e, key) => <UiGridCell key={key}>item {key}</UiGridCell>)}
  </UiGrid>
);

const Template2: ComponentStory<typeof UiGrid> = () => (
  <UiGrid
    indent={16}
    column={2}
  >
    { data.map((e, key) => <UiGridCell key={key}>item {key}</UiGridCell>)}
  </UiGrid>
);

export const GridWith7Cells8Indents4Columns = Template1.bind({});
export const GridWith7Cells16Indents2Columns = Template2.bind({});

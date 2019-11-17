import { storiesOf } from '@storybook/react';
import React from 'react';
import { withWorkLayout } from 'sbook/decorators';
import UiGrid from '.';
import UiGridCell from './cell';

const data = Array(7).fill(0).map((e, i) => i + 1);

storiesOf('UiGrid', module)
  .addDecorator(withWorkLayout)
  .add('Grid with 7 cells, 8 indents, 4 columns', () => (
    <UiGrid
      indent={8}
      column={4}
    >
      { data.map((e, key) => <UiGridCell key={key}>item {key}</UiGridCell>)}
    </UiGrid>
  ))
  .add('Grid with 7 cells, 16 indents, 2 columns, ', () => (
    <UiGrid
      indent={16}
      column={2}
    >
      { data.map((e, key) => <UiGridCell key={key}>item {key}</UiGridCell>)}
    </UiGrid>
  ));

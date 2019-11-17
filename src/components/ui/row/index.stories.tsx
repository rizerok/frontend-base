import { storiesOf } from '@storybook/react';
import React from 'react';
import { withWorkLayout } from 'sbook/decorators';
import UiRow from '.';


storiesOf('UiRow', module)
  .addDecorator(withWorkLayout)
  .add('Rows with indent 10px', () => (
    <>
      <UiRow indent="10px"> Row </UiRow>
      <UiRow indent="10px"> Row </UiRow>
      <UiRow indent="10px"> Row </UiRow>
    </>
  ))
  .add('Rows with indent 50px', () => (
    <>
      <UiRow indent="50px"> Row </UiRow>
      <UiRow indent="50px"> Row </UiRow>
      <UiRow indent="50px"> Row </UiRow>
    </>
  ));

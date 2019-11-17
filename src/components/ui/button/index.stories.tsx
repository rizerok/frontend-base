import { storiesOf } from '@storybook/react';
import React from 'react';
import UiButton from './index';

storiesOf('UiButton', module)
  .add('with text', () => (
    <UiButton>Hello Button</UiButton>
  ))
  .add('with some emoji', () => (
    <UiButton>😀 😎 👍 💯</UiButton>
  ));

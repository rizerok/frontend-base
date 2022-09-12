import React from 'react';
import { DecoratorFn } from '@storybook/react';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import store from 'store';
import StyleReset from 'styles/style-reset';
import StyleGlobal from 'styles/style-global';
import workLayout from 'styles/work-layout';

export const withRedux: DecoratorFn = (story) => (
  <Provider store={store}>
    { story() }
  </Provider>
);

export const withCss: DecoratorFn = (story, args) => (
  <>
    <StyleReset/>
    <StyleGlobal/>
    { story(args) }
  </>
);

const ScreenIndents = createGlobalStyle`
  body {
    padding: 20px;
  }
`;

export const withScreenIndents: DecoratorFn = (story) => (
  <>
    <ScreenIndents/>
    { story() }
  </>
);

const WorkLayout = createGlobalStyle`${workLayout}`;

export const withWorkLayout: DecoratorFn = (story, args) => (
  <>
    <WorkLayout/>
    { story(args) }
  </>
);

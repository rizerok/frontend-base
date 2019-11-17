import { configure, addDecorator } from '@storybook/react';
import { withCss, withScreenIndents } from './decorators';

const req = require.context('../src/components', true, /.stories.tsx$/);

function loadStories(): void {
  req.keys().forEach(req);
}

configure(loadStories, module);
addDecorator(withCss);
addDecorator(withScreenIndents);

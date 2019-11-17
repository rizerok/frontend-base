// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path');

module.exports = {
  sbook: resolve('.storybook'),
  styles: resolve('src', 'assets', 'styles'),
  img: resolve('src', 'assets', 'images'),
  fonts: resolve('src', 'assets', 'fonts'),
  store: resolve('src', 'store'),
  components: resolve('src', 'components'),
  types: resolve('src', 'types'),
  utils: resolve('src', 'utils'),
  constants: resolve('src', 'constants')
};

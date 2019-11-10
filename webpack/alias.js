const { resolve } = require('path');

module.exports = {
  styles: resolve('src', 'assets', 'styles'),
  img: resolve('src', 'assets', 'images'),
  fonts: resolve('src', 'assets', 'fonts'),
  store: resolve('src', 'store'),
  components: resolve('src', 'components'),
  types: resolve('src', 'types')
};

const { resolve } = require('path');
const alias = require('../webpack/alias');
const { loaderRules } = require('../webpack/js-rules');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [
      resolve('src'),
      resolve('.storybook')
    ],
    use: [
      loaderRules,
      { loader: require.resolve('react-docgen-typescript-loader') }
    ]
  });
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias = { ...config.resolve.alias, ...alias };

  return config;
};

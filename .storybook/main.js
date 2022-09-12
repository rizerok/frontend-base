const { jsRules } = require('../webpack/js-rules');
const alias = require('../webpack/alias');

module.exports = {
  babel: async (options) => options,
  stories: ['../src/**/*.stories.@(js|mdx|js|tsx)'],
  framework: '@storybook/react',
  core: {
    builder: "webpack5",
  },
  features: {
    interactionsDebugger: true,
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules = config.module.rules.map(r => {
      if (r.test.toString().indexOf('svg')!==-1) {
        return {
          ...r,
          test: /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
        }
      }
      return r;
    });
    console.log('new rules', config.module.rules);
    config.module.rules.push(jsRules);
    config.module.rules.push({
      test: /\.svg$/i,
      type: 'asset',
      resourceQuery: /url/ // *.svg?url
    });
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
      use: ['@svgr/webpack']
    });
    // config.module.rules.push({
    //   test: /\.(woff(2)?|ttf|eot)$/,
    //   use: 'null-loader',
    //   include: resolve('src', 'assets', 'fonts'),
    // });
    // config.module.rules.push({
    //   test: /\.(png|jpg|gif)$/,
    //   type: 'asset/resource'
    // });
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.alias = { ...config.resolve.alias, ...alias };
    return config;
  }
}


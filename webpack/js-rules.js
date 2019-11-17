const plugins = [
  '@babel/plugin-proposal-class-properties',
  [
    'babel-plugin-named-asset-import',
    {
      loaderMap: {
        svg: {
          ReactComponent: '@svgr/webpack?-prettier,-svgo![path]'
        }
      }
    }
  ]
];

const loaderRules = {
  loader: 'babel-loader',
  options: {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript'
    ],
    plugins,
    cacheCompression: process.env.NODE_ENV === 'production',
    compact: process.env.NODE_ENV === 'production'
  }
};

const jsRules = {
  test: /\.(js|jsx|tsx|ts)$/,
  exclude: /node_modules/,
  use: loaderRules
};

module.exports = { jsRules, loaderRules };

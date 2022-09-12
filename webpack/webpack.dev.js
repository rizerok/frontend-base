// eslint-disable-next-line import/no-extraneous-dependencies
const { HotModuleReplacementPlugin } = require('webpack');
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config();

let devServer;

function htmlReloadPlugin() {
  const cache = {};
  const current = {};
  const plugin = { name: 'CustomHtmlReloadPlugin' };
  this.hooks.compilation.tap(plugin, compilation => {
    const hooks = HtmlWebpackPlugin.getHooks(compilation);
    hooks.beforeEmit.tap(plugin, data => {
      const { html } = data;
      current[data.outputName] = html;
    });
    hooks.afterEmit.tap(plugin, data => {
      const orig = cache[data.outputName];
      if (orig && orig !== current[data.outputName]) {
        devServer.sendMessage(devServer.webSocketServer.clients, 'content-changed');
      }
      cache[data.outputName] = current[data.outputName];
    });
  });
}

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    onBeforeSetupMiddleware(server) {
      devServer = server;
    },
    static: false,
    open: process.env.IS_OPEN_CLIENT && JSON.parse(process.env.IS_OPEN_CLIENT),
    port: process.env.DEV_SERVER_PORT,
    historyApiFallback: true,
    devMiddleware: {
      index: true,
      writeToDisk: true
      // publicPath: './public'
    }
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    htmlReloadPlugin
  ]
};

module.exports = config;

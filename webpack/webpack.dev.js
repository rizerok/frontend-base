let devServer;

function htmlReloadPlugin() {
  const cache = {};
  const plugin = { name: 'CustomHtmlReloadPlugin' };
  this.hooks.compilation.tap(plugin, compilation => {
    compilation.hooks.htmlWebpackPluginAfterEmit.tap(plugin, data => {
      const orig = cache[data.outputName];
      const html = data.html.source();
      // plugin seems to emit on any unrelated change?
      if (orig && orig !== html) {
        devServer.sockWrite(devServer.sockets, 'content-changed');
      }
      cache[data.outputName] = html;
    });
  });
}

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    before(app, server) {
      devServer = server;
    },
    open: true,
    port: 8000,
    contentBase: './public',
    writeToDisk: true,
    index: 'index.html',
    hot: true
  },
  plugins: [
    htmlReloadPlugin
  ]
};

module.exports = config;

module.exports = {
  configureWebpack: {
    devtool: "source-map"
  },
  pwa: {
    iconPaths: {
      favicon32: "./public/favicon.ico",
      favicon16: "./public/favicon.ico",
      appleTouchIcon: "./public/favicon.ico",
      maskIcon: "./public/favicon.ico",
      msTileImage: "./public/favicon.ico"
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        SymbolId: "incon-[name]"
      });
  }
};

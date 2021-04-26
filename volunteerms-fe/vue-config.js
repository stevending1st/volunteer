module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === "ghpage") {
      config.mode = "production";
      config.devtool = "nosources-source-map";
    } else if (process.env.NODE_ENV === "dev") {
      config.mode = "development";
    } else {
      config.mode = "production";
    }
  },
  // {
  //   devtool:
  //     process.env.NODE_ENV === "dev" ? "nosources-source-map" : "source-map"
  // },
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
  },
  publicPath: process.env.VUE_APP_PUBLICPATH
};

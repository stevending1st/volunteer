const cdn = {
  css: [],
  js: [
    "https://cdn.bootcss.com/vue/2.5.17/vue.runtime.min.js",
    "https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js",
    "https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js",
    "https://cdn.bootcss.com/axios/0.18.0/axios.min.js"
  ]
};

module.exports = {
  chainWebpack: config => {
    // 生产环境配置
    if (process.env.NODE_ENV === "ghpage") {
      // 生产环境注入cdn
      config.plugin("html").tap(args => {
        args[0].cdn = cdn;
        return args;
      });
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "ghpage") {
      config.mode = "production";
      config.devtool = "nosources-source-map";
      // 用cdn方式引入
      config.externals = {
        vue: "Vue",
        vuex: "Vuex",
        "vue-router": "VueRouter",
        axios: "axios"
      };
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
  publicPath: process.env.VUE_APP_PUBLICPATH,
  productionSourceMap: process.env.NODE_ENV === "ghpage" ? false : true
};

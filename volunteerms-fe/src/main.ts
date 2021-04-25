import { createApp } from "vue";
import 'normalize.css';
// import { createApp } from "@/../node_modules/vue/dist/vue.js";
import App from "./App.vue";

import components from "./ElementUI";
import lang from "element-plus/lib/locale/lang/zh-cn";
import "dayjs/locale/zh-cn";
import locale from "element-plus/lib/locale";
import "element-plus/lib/theme-chalk/index.css";
// import _RadioButton from "element-plus/lib/el-radio-button";
import router from "./router";
// import "@/components/svgIcon/index.js";

if (process.env.VUE_APP_MOCK === "true") {
  require("@/mock/index");
}

// createApp(App)
//   // .use(router)
//   .use(ElButton)
//   .mount("#app");

// 使用简体汉字
locale.use(lang);

const app = createApp(App);

// 使用路由插件
app.use(router);

components.forEach(component => {
  app.component(component.name, component);
});

app.mount("#app");

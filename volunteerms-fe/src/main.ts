import { createApp } from "vue";
import App from "./App.vue";
import {
  ElRow,
  ElCol,
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElCard,
  ElRadioGroup,
  ElRadioButton,
  ElRadio,
  ElCascader,
  ElDatePicker,
  ElSwitch,
  ElSelect,
  ElOption,
  ElMenu,
  ElSubmenu,
  ElIcon,
  ElMenuItem,
  ElTooltip
} from "element-plus";
import lang from "element-plus/lib/locale/lang/zh-cn";
import "dayjs/locale/zh-cn";
import locale from "element-plus/lib/locale";
import "element-plus/lib/theme-chalk/index.css";
// import _RadioButton from "element-plus/lib/el-radio-button";
import router from "./router";

// createApp(App)
//   // .use(router)
//   .use(ElButton)
//   .mount("#app");

// 引入 Element-plus 数组
const components = [ElRow, ElCol, ElForm, ElFormItem, ElInput, ElButton, ElCard, ElRadioGroup, ElRadioButton, ElRadio, ElCascader,ElDatePicker, ElSwitch, ElSelect, ElOption, ElMenu, ElSubmenu, ElMenuItem, ElIcon, ElTooltip];

// 使用简体汉字
locale.use(lang);

const app = createApp(App);

// 使用路由插件
app.use(router);

// 遍历引入 Element-plus 组件
components.forEach(component => {
  app.component(component.name, component);
});

app.mount("#app");

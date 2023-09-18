import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import "./assets/global.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as Icons from "@element-plus/icons-vue"; // 引入所有图标，并命名为 Icons
import store from "./store/index";

const app = createApp(App);
// 通过遍历的方式注册所有 svg组件，会牺牲一点点性能
for (let i in Icons) {
  app.component(i, Icons[i]);
}

app.use(router).use(ElementPlus).use(store);
app.mount("#app");

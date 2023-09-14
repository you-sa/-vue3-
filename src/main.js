/*
 * @Author: liuzheng 8330460+wx_3078dad3bd@user.noreply.gitee.com
 * @Date: 2023-09-12 16:46:38
 * @LastEditors: liuzheng 8330460+wx_3078dad3bd@user.noreply.gitee.com
 * @LastEditTime: 2023-09-13 15:23:47
 * @FilePath: \vite-project\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index"
import './assets/global.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue' // 引入所有图标，并命名为 Icons

const app = createApp(App)
    // 通过遍历的方式注册所有 svg组件，会牺牲一点点性能
for (let i in Icons) {
    app.component(i, Icons[i])
}

app.use(router).use(ElementPlus)

app.mount('#app')
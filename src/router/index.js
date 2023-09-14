/*
 * @Author: liuzheng 8330460+wx_3078dad3bd@user.noreply.gitee.com
 * @Date: 2023-09-12 17:08:27
 * @LastEditors: liuzheng 8330460+wx_3078dad3bd@user.noreply.gitee.com
 * @LastEditTime: 2023-09-12 17:12:35
 * @FilePath: \vite-project\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/router/index.js

import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

const router = createRouter({
    // history: createWebHashHistory(),  // hash 模式
    history: createWebHistory(), // history 模式
    routes: [{
            path: '/',
            name: 'home',
            component: defineAsyncComponent(() =>
                import (`../views/Home/index.vue`)),
            meta: {
                title: '首页',
            },
        },

    ]
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
    // console.log(to, from)
    if (to.meta.title) {
        document.title = `${to.meta.title}`;
    }
    next()
})

router.afterEach((to, from) => {
    // console.log(to, from)
    console.log('afterEach')
})

export default router
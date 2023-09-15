/*
 * @Author: liuzheng 8330460+wx_3078dad3bd@user.noreply.gitee.com
 * @Date: 2023-09-12 16:46:38
 * @LastEditors: liuzheng 8330460+wx_3078dad3bd@user.noreply.gitee.com
 * @LastEditTime: 2023-09-14 21:38:42
 * @FilePath: \vite-project\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        // , AutoImport({
        //     resolvers: [ElementPlusResolver()],
        // }),
        // Components({
        //     resolvers: [ElementPlusResolver()],
        // }),
    ],

    css: {
        postcss: {
            plugins: [{
                postcssPlugin: "internal:charset-removal",
                AtRule: {
                    charset: (atRule) => {
                        if (atRule.name === "charset") {
                            atRule.remove();
                        }
                    },
                },
            }, ],
        },
    },
    server: {
        //用来配置跨域
        host: true,
        port: 8008,
        open: true,
        proxy: {
            "/api": {
                target: "http://localhost:3000", //目标服务器地址
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
    env: {
        node: true,
        // The Follow config only works with eslint-plugin-vue v8.0.0+
        "vue/setup-compiler-macros": true,
    },

    resolve: { alias: { "@": resolve(__dirname, "./src/") } },
});
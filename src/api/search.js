/*
 * @Author: liuzheng 8330460+wx_3078dad3bd@user.noreply.gitee.com
 * @Date: 2023-09-14 10:26:47
 * @LastEditors: liuzheng 8330460+wx_3078dad3bd@user.noreply.gitee.com
 * @LastEditTime: 2023-09-14 20:40:37
 * @FilePath: \vite-project\src\api\article.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "../utils/request";

// 获取默认搜索
export const searchDefault = () => {
    return axios({
        url: "/api/search/default",
        method: "post",
    });
};

export const searcHotDetail = () => {
    return axios({
        url: "/api/search/hot/detail",
        method: "post",
    });
};
<!--
 * @Author: liuzheng 8330460+wx_3078dad3bd@user.noreply.gitee.com
 * @Date: 2023-09-12 17:11:49
 * @LastEditors: liuzheng 8330460+wx_3078dad3bd@user.noreply.gitee.com
 * @LastEditTime: 2023-09-12 22:05:33
 * @FilePath: \vite-project\src\views\Home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <Header></Header>
  <Navigation></Navigation>
</template>
<script>
import Header from "./components/Header.vue";
import Navigation from "./components/Navigation.vue";
export default {
  components: {
    Header,
    Navigation,
  },
  setup() {},
};
</script>
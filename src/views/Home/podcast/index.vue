<!--
 * @Author: liuzheng 8330460+wx_3078dad3bd@user.noreply.gitee.com
 * @Date: 2023-09-12 17:11:49
 * @LastEditors: liuzheng 8330460+wx_3078dad3bd@user.noreply.gitee.com
 * @LastEditTime: 2023-09-12 22:05:33
 * @FilePath: \vite-project\src\views\Home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="flex">
    <div
      class="font-size:30px pl10 pr10 pt5"
      :class="{ active: item.title == curNode.title }"
      v-for="(item, key) in Hot"
      :key="key"
      @click="checkNode(item)"
    >
      {{ item.title }}
    </div>
  </div>
</template>
<style scoped>
.active {
  font-weight: bold;

  text-decoration: underline;
  text-decoration-color: red;
  text-underline-offset: 0.5em;
}
</style>
<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
let Hot = reactive([
  {
    title: "个性推荐",
  },
  {
    title: "专属订制",
  },
  {
    title: "歌单",
  },
  {
    title: "排行榜",
  },
  {
    title: "歌手",
  },
  {
    title: "最新音乐",
  },
]);
const curNode = reactive({ title: "", router: "" });

function checkNode(node) {
  curNode.title = node.title;
}
</script>
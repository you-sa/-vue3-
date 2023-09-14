<!--
 * @Author: liuzheng 8330460+wx_3078dad3bd@user.noreply.gitee.com
 * @Date: 2023-09-13 19:58:28
 * @LastEditors: liuzheng 8330460+wx_3078dad3bd@user.noreply.gitee.com
 * @LastEditTime: 2023-09-14 20:47:44
 * @FilePath: \vite-project\src\views\Home\components\Navigation.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="Navigation-container">
    <div class="nav-pane pt20 pl20">
      <div
        class="nav-item"
        :class="{ active: item.title == curNode.title }"
        v-for="(item, index) in navList"
        :key="index"
        @click="checkNode(item)"
      >
        {{ item.title }}
      </div>
    </div>
    <div class=""></div>
    <div class=""></div>

    <!-- <el-table
      :data="tableData1"
      :show-header="false"
      style="width: 100%; height: 35%"
    >
      <el-table-column prop="data" label="Date" />
    </el-table>
    <p>我的音乐</p>

    <el-table
      :data="navList"
      :show-header="false"
      style="width: 100%; height: 35%"
    >
      <el-table-column prop="data" label="Date" />
    </el-table> -->
  </div>
</template>

<style lang="scss" scoped>
.Navigation-container {
  width: 16vw;
  height: 80vh;
  border-right: 1px solid #333333;

  .nav-pane {
    height: 40vh;
  }

  .nav-item {
    height: 4vh;
  }

  .active {
    font-weight: bold;
    background-color: #f6f6f7;
  }
}
</style>


<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    const navList = ref([
      {
        title: "发现音乐",
      },
      {
        title: "播客",
      },
      {
        title: "视频",
      },
      {
        title: "关注",
      },
      {
        title: "直播",
      },
      {
        title: "私人漫游",
      },
    ]);
    const myNavList = ref([
      {
        title: "我喜欢的音乐",
      },
      {
        title: "本地与下载",
      },
      {
        title: "最近播放",
      },
      {
        title: "我的音乐云盘",
      },
      {
        title: "我的博客",
      },
      {
        title: "我的收藏",
      },
    ]);
    const curNode = reactive({ title: "" });

    function checkNode(node) {
      curNode.title = node.title;
    }
    return {
      navList,
      myNavList,
      checkNode,
      curNode,
    };
  },
};
</script>

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
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const navList = ref([
      {
        title: "发现音乐",
        router: "findMusic",
      },
      {
        title: "播客",
        router: "podcast",
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
      console.log(111);
      console.log(node.router);
      router.push({
        name: node.router,
      });
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
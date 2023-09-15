<!--
 * @Author: liuzheng 8330460+wx_3078dad3bd@user.noreply.gitee.com
 * @Date: 2023-09-12 22:01:29
 * @LastEditors: liuzheng 8330460+wx_3078dad3bd@user.noreply.gitee.com
 * @LastEditTime: 2023-09-15 21:58:50
 * @FilePath: \vite-project\src\views\Home\components\Header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="header-container flex">
    <!--标题 -->
    <div class="flex align-center pl20">
      <img src="@/assets/img/music.jpg" />
      <h2 class="header-container-title ml10">网易云音乐</h2>
    </div>
    <!-- 前进后退箭头 -->
    <div class="header-container-arrow flex align-center ml80">
      <el-icon style="color: white">
        <ArrowLeftBold />
      </el-icon>
      <el-icon style="color: white">
        <ArrowRightBold />
      </el-icon>
    </div>

    <!-- 搜索框 -->
    <div class="flex align-center ml40">
      <el-popover placement="bottom" trigger="click" :width="340">
        <template #reference>
          <el-input
            @focus="hotlist()"
            @change="console.log('change')"
            :placeholder="showKeyword"
            :prefix-icon="Search"
            @keyup.enter="console.log('回车')"
          />
        </template>
        <div style="overflow-y: auto; height: 400px">
          <div class="mb20">热搜榜</div>
          <TopSearch
            class="top-search"
            v-for="(item, index) in hotDetail"
            :key="index"
            :detail="item"
            :rank="index"
          ></TopSearch>
        </div>
      </el-popover>
    </div>
    <!-- 麦克风 -->
    <div class="flex align-center">
      <img src="@/assets/img/microphone.png" />
    </div>
  </div>
</template>   

<script setup>
import { searchDefault, searcHotDetail } from "@/api/search";
import { ref, reactive, onMounted } from "vue";
import { Search } from "@element-plus/icons-vue";
import TopSearch from "./TopSearch.vue";

const showKeyword = ref("");
const hotDetail = reactive({});

function hotlist() {
  searcHotDetail().then((res) => (this.hotDetail = res.data));
}

onMounted(() => {
  searchDefault().then((res) => (showKeyword.value = res.data.showKeyword));
});
</script>

<style lang="scss" scoped>
.header-container {
  background-color: #dd3333;
  width: 100vw;
  height: 10vh;

  img {
    width: 30px;
    height: 30px;
  }

  .el-input {
    --el-input-border-color: #e33e3e;
    --el-input-hover-border-color: #e33e3e;
    --el-input-focus-border-color: #e33e3e;
  }

  ::v-deep .el-input__wrapper {
    background-color: transparent;
    border-radius: 30px;
  }

  ::v-deep .el-popper__arrow::before {
    display: none;
  }
}

.header-container-title {
  color: aliceblue;
}

.top-search:hover {
  background-color: #f2f2f2;
}
</style>
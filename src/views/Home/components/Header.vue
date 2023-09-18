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
          <!-- :prefix-icon="Search":搜索图标 -->
          <el-input
            v-model="searchContent"
            @focus="hotList()"
            @change="console.log('change')"
            :placeholder="showKeyword"
            :prefix-icon="Search"
            @keyup.enter="searchSong"
          />
        </template>
        <div style="overflow-y: auto; height: 400px">
          <div>搜索历史</div>
          <el-button
            class="mr8 mt10"
            size="small"
            round
            v-for="(item, index) in searchList"
            :key="item.searchWord"
            >{{ item }}
            <el-icon @click="deleteSearchHistory(index)"><Close /></el-icon
          ></el-button>
          <div class="mt20 mb20">热搜榜</div>
          <TopSearch
            class="top-search"
            @click="searchHot(item)"
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
import { searchDefault, searchHotDetail } from "@/api/search";
import { ref, reactive, onMounted, computed } from "vue";
import { Search } from "@element-plus/icons-vue";
import TopSearch from "./TopSearch.vue";
import store from "@/store/index.js";

const showKeyword = ref("");
const hotDetail = reactive({});
const searchList = computed(() => store.state.search.searchList).value;
const searchContent = ref("");

// 获取热搜榜
function hotList() {
  searchHotDetail().then((res) => (this.hotDetail = res.data));
}
// 回车搜索
function searchSong() {
  if (searchContent.value.length > 0) {
    addSearch(searchContent.value);
  } else {
    addSearch(showKeyword.value);
  }
}
// 添加搜索历史
function addSearch(value) {
  searchList.unshift(value);
  store.commit("search/setSearchList", searchList);
}
// 删除一个搜索记录
function deleteSearchHistory(index) {
  searchList.splice(index, 1);
  store.commit("search/setSearchList", searchList);
}
// 点击热榜
function searchHot(item) {
  addSearch(item.searchWord);
}
// 获取默认搜索值
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
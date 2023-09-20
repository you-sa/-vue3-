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
      <el-popover placement="bottom" :visible="showSearchPopover" :width="340">
        <template #reference>
          <!-- :prefix-icon="Search":搜索图标 -->
          <el-input
            id="searchInput"
            v-model="searchContent"
            @focus="hotList()"
            v-on:input="getSuggest"
            :placeholder="showKeyword"
            :prefix-icon="Search"
            @keyup.enter="searchSong"
            @blur="showSearchPopover = false"
          />
        </template>
        <!-- 搜索建议榜 -->
        <div v-if="searchContent">
          <!-- 单曲 -->
          <div v-if="suggestions.songs">
            <p style="font-size: 18px; color: #999999">单曲</p>
            <div
              v-for="item in suggestions.songs"
              :key="item.id"
              class="top-search pt5"
            >
              {{ item.name }}{{ item.transNames }}
            </div>
          </div>
          <!-- 歌手 -->
          <div v-if="suggestions.artists">
            <p style="font-size: 18px; color: #999999">歌手</p>
            <div
              v-for="item in suggestions.artists"
              :key="item.id"
              class="top-search pt5"
            >
              {{ item.name }}
            </div>
          </div>
          <!-- 专辑 -->
          <div v-if="suggestions.albums">
            <p style="font-size: 18px; color: #999999">专辑</p>
            <div
              v-for="item in suggestions.albums"
              :key="item.id"
              class="top-search flex pt5"
            >
              {{ item.name }}
            </div>
          </div>
          <!-- 歌单 -->
          <div v-if="suggestions.playlists">
            <p style="font-size: 18px; color: #999999">歌单</p>
            <div
              v-for="item in suggestions.playlists"
              :key="item.id"
              class="top-search pt5"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
        <!-- 默认热榜 -->
        <div v-else-if="!searchContent" style="overflow-y: auto; height: 400px">
          <div class="flex">
            <div>搜索历史</div>
            <el-icon class="pl10 pt5" @click="clearHistory"><Delete /></el-icon>
          </div>

          <el-button
            class="mr8 mt10"
            size="small"
            round
            v-for="(item, index) in searchList"
            :key="index"
            >{{ item }}
            <el-icon @click.stop="deleteSearchHistory(index)"><Close /></el-icon
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
    <!-- 头像 -->
    <div class="flex align-center pl150">
      <el-avatar @click="showLogin" :size="40" />
    </div>
  </div>
  <!-- 登录框 -->
  <div>
    <el-dialog
      v-model="LoginBox"
      class="flex justify-center"
      width="30%"
      :before-close="handleClose"
    >
      <h1 style="">扫码登录</h1>
      <img :src="qrUrl" alt="" />
    </el-dialog>
  </div>
</template>   

<script setup>
import { searchDefault, searchHotDetail, searchSuggest } from "@/api/search";
import { longInKey, qrCreate, qrCheck } from "@/api/login.js";
import { ref, reactive, onMounted, computed, toRefs } from "vue";
import { Search } from "@element-plus/icons-vue";
import TopSearch from "./TopSearch.vue";
import store from "@/store/index.js";

const showKeyword = ref("");
const hotDetail = reactive({});
const searchList = computed(() => store.state.search.searchList).value;
const searchContent = ref("");
const showSearchPopover = ref(false);
const qrUrl = ref("");
// 单曲，歌手，专辑，歌单
let { songs, artists, albums, playlists } = reactive({});
// 登录消息框
let LoginBox = ref(false);

let suggestions = reactive({
  songs: [],
  artists: [],
  albums: [],
  playlists: [],
});

// 获取热搜榜
function hotList() {
  searchHotDetail().then((res) => {
    this.hotDetail = res.data;
    showSearchPopover.value = true;
  });
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
  let flag = searchList.find(function (item, index, searchList) {
    if (item == value) return index;
  });
  console.log(flag);
  if (flag == undefined) {
    searchList.unshift(value);
  } else {
    searchList.splice(flag, 1);
  }
  store.commit("search/setSearchList", searchList);
}
// 删除一个搜索记录
function deleteSearchHistory(index) {
  document.getElementById("searchInput").focus();
  searchList.splice(index, 1);
  store.commit("search/setSearchList", searchList);
}
// 删除所有搜索历史
function clearHistory() {
  store.commit("search/setSearchList", []);
}
// 点击热榜
function searchHot(item) {
  document.getElementById("searchInput").focus();
  addSearch(item.searchWord);
}
// 获取默认搜索值
onMounted(() => {
  searchDefault().then((res) => (showKeyword.value = res.data.showKeyword));
});
// 获取搜索建议
function getSuggest() {
  if (searchContent.value) {
    searchSuggest(searchContent.value).then((res) => {
      suggestions.songs = res.result.songs;
      suggestions.artists = res.result.artists;
      suggestions.albums = res.result.albums;
      suggestions.playlists = res.result.playlists;
      console.log(suggestions.songs);
    });
  }
}
// async function showLogin() {
//   LoginBox.value = true;
//   let nowTime = new Date();
//   // 获取key
//   let key = (await longInKey(nowTime)).data.unikey;
//   // 获取二维码图片
//   qrUrl.value = (await qrCreate(key)).data.qrimg;
//   // 每三秒check一次
//   let check = setInterval(async () => {
//     let now = new Date().getTime();
//     let res = await qrCheck(key, now).then();
//     // 二维码已过期
//     if (res.code == 800) {
//       ElMessage({
//         message: res.message,
//         type: "warning",
//       });
//       clearInterval(check);
//     }
//     // 待确认
//     // if (res.code == 802) {
//     //   ElMessage({
//     //     message: res.data.message,
//     //     type: "warning",
//     //   });
//     //   clearInterval(check);
//     // }
//     // 授权成功
//     if (res.code == 803) {
//       ElMessage({
//         message: res.message,
//         type: "success",
//       });
//       clearInterval(check);
//       console.log(res);
//       // getInfo(res.cookie)
//     }
//   }, 3000);
// }
// 登录页面
async function showLogin() {
  let time = new Date();
  let key = "";
  LoginBox.value = true;

  await longInKey(time).then((res) => {
    key = res.data.unikey;
    console.log(key);
  });
  await qrCreate(key).then((res) => {
    qrUrl.value = res.data.qrimg;
  });
  let timeFun = setInterval(async () => {
    let now = new Date().getTime();
    let res = await qrCheck(key, now).then();
    console.log(111);
    // // 待扫码
    // if (res.code == 801) {
    //   console.log(res.message);
    // }
    // 过期
    if (res.code == 800) {
      clearInterval(timeFun);
      console.log(res.message);
    }
    // // 待确认
    // if (res.code == 802) {
    //   console.log(res.message);
    // }
    // 登录成功
    if (res.code == 803) {
      clearInterval(timeFun);
      console.log(res);

      LoginBox.value = false;
    }
  }, 3000);
}
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
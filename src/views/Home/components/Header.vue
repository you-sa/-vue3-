<!--
 * @Author: liuzheng 8330460+wx_3078dad3bd@user.noreply.gitee.com
 * @Date: 2023-09-12 22:01:29
 * @LastEditors: liuzheng 8330460+wx_3078dad3bd@user.noreply.gitee.com
 * @LastEditTime: 2023-09-13 22:23:59
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
      <el-icon style="color: white"><ArrowLeftBold /></el-icon>
      <el-icon style="color: white"><ArrowRightBold /></el-icon>
    </div>

    <!-- 搜索框 -->
    <div class="flex align-center ml40">
      <el-input
        @focus="
          {
            console.log('focus');
          }
        "
        @change="
          {
            console.log('change');
          }
        "
        v-model="input2"
        class="w-50 m-2"
        placeholder="林俊杰"
        :prefix-icon="Search"
        @keyup.enter="
          {
            console.log('回车');
          }
        "
      />
    </div>
    <!-- 麦克风 -->
    <div class="flex align-center">
      <img src="@/assets/img/microphone.png" />
    </div>
  </div>
</template>   

<style lang="scss" scoped>
.header-container {
  background-color: #dd3333;
  width: 100vw;
  height: 10vh;
  img {
    width: 30px;
    height: 30px;
  }
  ::v-deep .el-input__wrapper {
    background-color: transparent;
    border-radius: 30px;
  }
}
.header-container-title {
  color: aliceblue;
}
</style>

<script  >
export default {
  data() {
    return {};
  },
  setup() {},
};
</script>
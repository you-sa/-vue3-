<!--
 * @Author: liuzheng 8330460+wx_3078dad3bd@user.noreply.gitee.com
 * @Date: 2023-09-15 11:14:56
 * @LastEditors: liuzheng 8330460+wx_3078dad3bd@user.noreply.gitee.com
 * @LastEditTime: 2023-09-15 21:23:50
 * @FilePath: \vite-project\src\views\Home\components\topSearch.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template >
  <div class="topSearch-detail flex align-center">
    <span class="ml10 mr30" :style="[rank < 3 ? 'color: red' : '']">{{
      rank + 1
    }}</span>
    <div>
      <div class="flex">
        {{ detail.searchWord }}
        <img
          v-if="detail.iconType == 1"
          :src="detail.iconUrl"
          class="icon ml10"
        />
        <img
          v-if="detail.iconType == 5"
          :src="detail.iconUrl"
          class="icon-top ml10"
        />
        <span class="ml8 fs12">{{ detail.score }}</span>
      </div>
      <div v-if="detail.content != ''" style="font-size: small">
        {{ detail.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detail: {
      type: Object,
      required: true,
    },
    rank: {
      type: Number,
      required: true,
    },
  },
  setup() {
    return {
      // imgSrc: require("detail.iconUrl"),
    };
  },
};
</script>

<style lang="scss" scoped>
.topSearch-detail {
  width: 300px;
  height: 50px;
  cursor: pointer;

  .icon {
    width: 20px;
    height: 16px;
  }

  .icon-top {
    width: 16px;
    height: 16px;
  }
}
</style>
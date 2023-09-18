export default {
  namespaced: true,
  state() {
    return {
      searchList: ["向云端", "伍佰", "谁", "当那一天来临", "五月天"],
      name: "13333",
    };
  },
  // 准备mutations-用于操作数据（state
  mutations: {
    setSearchList(state, searchList) {
      state.searchList = searchList;
    },
  },
  actions: {
    changeSetSearchList({ commit }, data) {
      commit("setSearchList", data);
    },
  },
};

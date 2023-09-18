import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import search from "./modules/search";

const store = createStore({
  plugins: [createPersistedState()],
  // your store options...
  modules: {
    search,
  },
});

export default store;

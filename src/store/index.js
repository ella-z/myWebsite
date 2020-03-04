import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoginShow:false
  },
  mutations: {
    changeLoginState(state,res){
      state.isLoginShow = res;
    }
  },
  actions: {},
  modules: {}
});

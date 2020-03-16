import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoginShow:false,
    navId:'Home'
  },
  mutations: {
    changeLoginState(state,res){
      state.isLoginShow = res;
    },
    changeNavId(state,res){
      state.navId = res;
    }
  },
  actions: {},
  modules: {}
});

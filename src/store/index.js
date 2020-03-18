import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isSignInShow:false,
    isSignShow:false,
    navId:'Home', //导航栏的标题
    navIndex:0, //导航栏的下标
    navContent:'',
  },
  mutations: {
    changeSignState(state,res){
      state.isSignShow = res;
    },
    changeSignInState(state,res){
      state.isSignInShow = res;
    },
    changeNavId(state,res){
      state.navId = res;
    },
    changeNavIndex(state,res){
      state.navIndex = res;
    },
    changeNavContent(state,res){
      state.navContent = res;
    }
  },
  actions: {},
  modules: {}
});

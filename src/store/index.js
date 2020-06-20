import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAddKeyframe:false, //是否给progressBar添加了Keyframe
    navId:'Home', //导航栏的标题
    navIndex:0, //导航栏的下标
    navContent:'',
    isLogin:false, // 是否有登录
    errorText:'', // 提示的信息
    iserror:false //是否显示提示
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
    },
    changeKeyframeState(state){
      state.isAddKeyframe = true;
    },
    changeloginState(state,res){
      state.isLogin = res;
    },
    changeerrorText(state,res){
      state.errorText = res;
    },
    changeerrorState(state,res){
      state.iserror = res;
    }
  },
  actions: {},
  modules: {}
});

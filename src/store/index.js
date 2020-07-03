import Vue from "vue";
import Vuex from "vuex";
import nav from "./modules/nav";
import comment from "./modules/comment";
import essay from "./modules/essay";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAddKeyframe:false, //是否给progressBar添加了Keyframe
    isShowUpAvatar:false //是否展示上传头像页面
  },
  mutations: {
    changeKeyframeState(state){
      state.isAddKeyframe = true;
    },
    changeShowUpAvatar(state,res){
      state.isShowUpAvatar = res;
    }
  },
  modules: {
    nav,
    essay,
    comment,
    user
  }
});

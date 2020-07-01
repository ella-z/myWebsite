import Vue from "vue";
import Vuex from "vuex";
import nav from "./modules/nav";
import comment from "./modules/comment";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAddKeyframe:false, //是否给progressBar添加了Keyframe
    isLogin:false, // 是否有登录
    essayId:''||localStorage.getItem('essayId'), //当前预览文章的id
    boardCommentData:[], //留言板的留言
    essayCommentData:[], //文章的留言
    isShowUpAvatar:false //是否展示上传头像
  },
  mutations: {
    changeKeyframeState(state){
      state.isAddKeyframe = true;
    },
    changeloginState(state,res){
      state.isLogin = res;
    },
    changeEssayId(state,res){
      state.essayId = res;
    }, 
    changeEssayCommentData(state,res){
      state.essayCommentData = res.reverse();
    },
    addEssayComment(state,res){
      state.essayCommentData.unshift(res);
    },
    deleteEssayComment(state,index){
      state.essayCommentData.splice(index,1)
    },
    changeboardCommentData(state,res){
      state.boardCommentData = res.reverse();
    },
    addBoardComment(state,res){
      state.boardCommentData.unshift(res);
    },
    deleteBoardComment(state,index){
      state.boardCommentData.splice(index,1)
    },
    changeShowUpAvatar(state,res){
      state.isShowUpAvatar = res;
    }
  },
  actions: {
    
  },
  modules: {
    nav,
    comment
  }
});

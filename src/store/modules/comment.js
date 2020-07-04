import {addBoardComment,deleteBoardComment} from "@/api/comment";

const state = {
  boardCommentData: [] // 留言板的留言
}

const mutations = {
  changeboardCommentData (state, res) {
    state.boardCommentData = res.reverse()
  },
  addBoardComment (state, res) {
    state.boardCommentData.unshift(res)
  },
  deleteBoardComment (state, index) {
    state.boardCommentData.splice(index, 1)
  }
}

const actions={
  addComment({commit},commentData){
    return new Promise((resolve,reject)=>{
      addBoardComment(commentData).then(responese=>{
        commit("addBoardComment",responese.data);
        resolve(responese);
      }).catch(error =>{
        reject(error);
      })
    })
  },
  deleteComment({commit,state},commentId){
    const boardCommentData = state.boardCommentData;
    for (let i = 0; i < boardCommentData.length; i++) {
      if (boardCommentData[i]._id === commentId) {
        commit("deleteBoardComment", i);
      }
    }
    return new Promise((resolve,reject)=>{
      deleteBoardComment(commentId).then(responese=>{
        resolve(responese);
      }).catch(error =>{
        reject(error);
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

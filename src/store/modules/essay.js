import { addEssayComment, deleteEssayComment } from '@/api/essay'

const state = {
  essayCommentData: [], // 文章的留言
  essayId: '' || localStorage.getItem('essayId') // 当前预览文章的id
}

const mutations = {
  changeEssayCommentData (state, res) {
    state.essayCommentData = res.reverse()
  },
  addEssayComment (state, res) {
    state.essayCommentData.unshift(res)
  },
  deleteEssayComment (state, index) {
    state.essayCommentData.splice(index, 1)
  },
  changeEssayId (state, res) {
    state.essayId = res
  }
}

const actions = {
  addComment ({ commit }, commentData) {
    return new Promise((resolve, reject) => {
      addEssayComment(commentData).then(responese => {
        commit('addEssayComment', responese.data)
        resolve(responese)
      }).catch(error => {
        reject(error)
      })
    })
  },
  deleteComment ({ commit, state }, commentId) {
    const essayCommentData = state.essayCommentData
    for (let i = 0; i < essayCommentData.length; i++) {
      if (essayCommentData[i]._id === commentId) {
        commit('deleteEssayComment', i)
      }
    }
    return new Promise((resolve, reject) => {
      deleteEssayComment(commentId).then(responese => {
        resolve(responese)
      }).catch(error => {
        reject(error)
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

const state = {
    essayCommentData: [], //文章的留言
    essayId: '' || localStorage.getItem('essayId'), //当前预览文章的id
}

const mutations = {
    changeEssayCommentData(state, res) {
        state.essayCommentData = res.reverse();
    },
    addEssayComment(state, res) {
        state.essayCommentData.unshift(res);
    },
    deleteEssayComment(state, index) {
        state.essayCommentData.splice(index, 1)
    },
    changeEssayId(state, res) {
        state.essayId = res;
    },
}

export default {
    namespaced: true,
    state,
    mutations
}
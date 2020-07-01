const state = {
    boardCommentData: [], //留言板的留言
    essayCommentData: [], //文章的留言
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
    changeboardCommentData(state, res) {
        state.boardCommentData = res.reverse();
    },
    addBoardComment(state, res) {
        state.boardCommentData.unshift(res);
    },
    deleteBoardComment(state, index) {
        state.boardCommentData.splice(index, 1)
    }
}

export default{
    namespaced: true,
    state, 
    mutations
}
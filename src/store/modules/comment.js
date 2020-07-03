const state = {
    boardCommentData: [], //留言板的留言
}

const mutations = {
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
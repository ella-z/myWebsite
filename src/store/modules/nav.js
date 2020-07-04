const state = {
  navId: 'Home', // 导航栏的标题
  navIndex: 0, // 导航栏的下标
  navContent: ''
}

const mutations = {
  changeNavId (state, res) {
    state.navId = res
  },
  changeNavIndex (state, res) {
    state.navIndex = res
  },
  changeNavContent (state, res) {
    state.navContent = res
  }
}

export default {
  namespaced: true,
  state,
  mutations
}

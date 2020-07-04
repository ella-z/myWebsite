import { login } from '@/api/user'
import cookie from 'vue-cookies'

const state = {
  isLogin: false, // 是否有登录
  token: '',
  userInfo: null
}

const mutations = {
  changeloginState (state, res) {
    state.isLogin = res
  },
  setUserInfo (state, res) {
    state.userInfo = res
  },
  SET_TOKEN (state, res) {
    state.token = res
  }
}

const actions = {
  login ({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo.phoneNumber, userInfo.password).then(response => {
        const result = response.result
        cookie.set('token', result.token, 60 * 60 * 24)
        commit('SET_TOKEN', result.token)
        resolve(result)
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

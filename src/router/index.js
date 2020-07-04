import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index'
import signIn from '@/views/user/signIn'
import signUp from '@/views/user/signUp'
import essayDetail from '@/views/essay/essayDetail'
import userPage from '@/views/user/userPage'
import resetPassword from '@/views/user/resetPassword'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    meta: {
      keepAlive: true // 缓存位置
    }
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: signIn
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: signUp
  },
  {
    path: '/essayDetail',
    name: 'essayDetail',
    component: essayDetail
  },
  {
    path: '/userPage',
    name: 'userPage',
    component: userPage
  },
  {
    path: '/resetPassword',
    name: 'resetPassword',
    component: resetPassword
  }
]

const router = new VueRouter({
  mode: 'history', // 保存历史
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router

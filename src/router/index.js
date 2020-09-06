import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: ()=>import('@/views/index'),
    meta: {
      keepAlive: true // 缓存位置
    }
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: ()=>import('@/views/user/signIn')
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: ()=>import('@/views/user/signUp')
  },
  {
    path: '/essayDetail',
    name: 'essayDetail',
    component: ()=>import('@/views/essay/essayDetail')
  },
  {
    path: '/userPage',
    name: 'userPage',
    component: ()=>import('@/views/user/userPage')
  },
  {
    path: '/resetPassword',
    name: 'resetPassword',
    component: ()=>import('@/views/user/resetPassword')
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

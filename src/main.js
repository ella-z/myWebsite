import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueCookies from 'vue-cookies'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import router from './router'
import { Upload, Image } from 'element-ui';

Vue.use(Upload)
Vue.use(Image)
Vue.use(mavonEditor)
Vue.use(VueCookies)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

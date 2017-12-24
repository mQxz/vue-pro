import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/reset.css'
import './assets/style/border.css'
import VueSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/style/iconfont/iconfont.css'
<<<<<<< HEAD
import './assets/style/iconfont-particulars/iconfont.css'
=======
import './assets/style/iconfont-hotSpring/iconfont.css'
>>>>>>> origin/master
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import store from './store/'

FastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueSwiper)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

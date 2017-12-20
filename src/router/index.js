import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import OnedayTour from '@/page/onedayTour/index'
import Sky from '@/page/sky/index'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  }, {
    path: '/onedayTour',
    name: 'onedayTour',
    component: OnedayTour
  }, {
  	path: '/sky',
    name: 'Sky',
    component: Sky
  }]
})

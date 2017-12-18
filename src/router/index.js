import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import CityChoose from '@/page/cityChoose/cityChoose'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/cityChoose',
      name: 'cityChoose',
      component: CityChoose
    }
  ]
})

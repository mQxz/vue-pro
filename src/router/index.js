import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import CityChoose from '@/page/cityChoose/cityChoose'
import Disney from '@/page/disney/disney'
import OnedayTour from '@/page/onedayTour/index'
import Sky from '@/page/sky/index'

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
    }, {
      path: '/disney',
      name: 'disney',
      component: Disney
    }, {
      path: '/onedayTour',
      name: 'onedayTour',
      component: OnedayTour
    }, {
      path: '/sky',
      name: 'Sky',
      component: Sky
    }
  ]
})

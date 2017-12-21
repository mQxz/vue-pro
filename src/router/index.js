import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import DetailsPage from '@/page/detailsPage/detailsPage'
import HotSpring from '@/page/hotSpring/hotSpring'
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
    },
    {
      path: '/detailsPage',
      name: 'detailsPage',
      component: DetailsPage
    },
    {
      path: '/hotSpring',
      name: 'hotSpring',
      component: HotSpring
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

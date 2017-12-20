import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import DetailsPage from '@/page/detailsPage/detailsPage'
import HotSpring from '@/page/hotSpring/hotSpring'

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
    }
  ]
})

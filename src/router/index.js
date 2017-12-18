import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import DetailsPage from '@/page/detailsPage/detailsPage'

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
    }
  ]
})

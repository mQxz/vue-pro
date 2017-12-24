import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import Particulars from '@/page/particulars/particulars'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/particulars',
      name: 'particulars',
      component: Particulars
    }
  ]
})

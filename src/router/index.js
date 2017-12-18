import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import Disney from '@/page/disney/disney'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/disney',
      name: 'disney',
      component: Disney
    }
  ]
})

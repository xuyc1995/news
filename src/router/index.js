import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/page/homepage'
import regeister from '@/page/regeister'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/regeister',
      name: 'regeister',
      component: regeister
    }
  ]
})

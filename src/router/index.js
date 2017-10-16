import Vue from 'vue'

import Router from 'vue-router'
import homepage from '@/page/homepage'
import regeister from '@/page/regeister'
import newsList from '@/components/newslist'
import singleNews from '@/components/singleNews'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      // redirect:'/homepage',
      component: regeister
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: homepage,
      children:[
        {path: '',component: newsList,},
        {path:'/:id',component:singleNews}
      ]
    },
    {
      path: '/regeister',
      name: 'regeister',
      component: regeister
    }
  ]
})

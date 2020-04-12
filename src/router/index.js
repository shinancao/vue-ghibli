import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/films'
    },
    {
      path: '/films',
      name: 'Films',
      component: () => import('@/views/Films')
    },
    {
      path: '/filmDetail',
      name: 'FilmDetail',
      component: () => import('@/views/FilmDetail')
    }
  ]
})

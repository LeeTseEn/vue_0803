import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/data-event',
          name: 'DataEvent',
          component: () => import('./components/DataEvent.vue')
        },
        {
          path: '/ca-chya',
          name: 'CaChya',
          component: () => import('./components/CaChya.vue')
        },
        {
          path: 'localstorange',
          name: 'LocalStorange',
          component: () => import('./components/LocalStorange.vue'),
        },
        {
          path: 'localstorange_card_result',
          name: 'LocalStorangeCardResult',
          component: () => import('./components/LocalStorangeCardResult.vue')
        }
      ]
    },
    {
      path: '/apiText',
      name: 'ApiText',
      component: () => import('./views/ApiTemp.vue')
    }
  ]
})

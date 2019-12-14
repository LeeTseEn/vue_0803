import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cookies from 'js-cookie'

Vue.use(Router)

const router = new Router({
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
        },
        {
          path: 'LogIn',
          name: 'LogIn',
          component: () => import('./components/Login.vue')
        },
        {
          path: 'FgoLocal',
          name: 'FgoLocal',
          component: () => import('./components/FgoLocal.vue')
        },
        {
          path: 'Regexp',
          name: 'Regexp',
          component: () => import('./components/Regexp.vue')
        },
        {
          path: 'Regular',
          name: 'Regular',
          component: () => import('./components/Regular.vue')
        },
        {
          path: 'VueI18n',
          name: 'VueI18n',
          component: () => import('./components/VueI18n.vue')
        },
        {
          path: 'VuexTemp',
          name: 'VuexTemp',
          component: () => import('./components/VuexTemp.vue')
        },
        {
          path: 'VuexTempDetail',
          name: 'VuexTempDetail',
          component: () => import('./components/VuexTempDetail.vue')
        },
        {
          path: 'Components',
          name: 'Components',
          component: () => import('./components/Components.vue')
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

export default router

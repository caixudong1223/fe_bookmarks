import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../components/Content.vue'], resolve)
    },
    {
      path: '/ui',
      name: 'ui',
      component: resolve => require(['../components/Content.vue'], resolve)
    },
    {
      path: '/vue',
      name: 'vue',
      component: resolve => require(['../components/VueFramework.vue'], resolve)
    },
    {
      path: '/hello',
      name: 'hello',
      component: resolve => require(['../components/Hello.vue'], resolve)
    },{
      path: '/login',
      name: 'login',
      component: () => import('../pages/login.vue')
    },{
      path: '/vueDemos',
      name: 'vueDemos',
      component: () => import('../pages/VueDemoPrj.vue')
    }
  ]
})

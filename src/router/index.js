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
      component: resolve => require(['../components/Content.vue'], resolve)
    },
    {
      path: '/vue',
      component: resolve => require(['../components/vueContent.vue'], resolve)
    },
    {
      path: '/hello',
      component: resolve => require(['../components/Hello.vue'], resolve)
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../components/Content.vue'], resolve)
    },
    {
      path: '/ui-frameworks',
      component: resolve => require(['../components/Content.vue'], resolve)
    }
  ]
})

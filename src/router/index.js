import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout
    },
    
  ]
})

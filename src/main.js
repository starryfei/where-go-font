// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
// import locale from 'element-ui/lib/locale/lang/en'
import echarts from 'echarts'
import App from './App'
import router from './router'
import axios from 'axios'



Vue.use(ElementUI)
// Vue.use(ElementUI, { locale })
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import  './element'
import axios from 'axios'
Vue.prototype.$axios = axios 
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,store,
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  console.log(store);
  if (to.path !== '/login' && !store.state.login.user) next({ path: '/login' })
  else next()
})

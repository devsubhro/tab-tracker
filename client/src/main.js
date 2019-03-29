// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from 'vuetify'
import {sync} from 'vuex-router-sync'
//need to specify the full path
import store from './store/store.js'

import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(vuetify)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

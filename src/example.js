// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Exp from './Exp'
import ProductZoomer from '../dist/app.js'
Vue.use(ProductZoomer)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Exp/>',
  components: { Exp }
})

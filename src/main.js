// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MenuBar from './MenuBar'
import FoodList from './FoodList'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#menu-bar',
  router,
  template: '<MenuBar/>',
  components: { MenuBar }
})

new Vue({
  el: '#food-list',
  template: '<FoodList/>',
  components: { FoodList }
})

import Vue from 'vue'
import Index from './Index'
import About from './components/About'
import Listing from './components/Listing'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = []
const router = new VueRouter({
  routes: [
    {
      path: '/listing',
      name: 'Listing',
      component: Listing
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ],
  mode: 'history'
})

new Vue({
  el: '#app',
  template: '<Index/>',
  components: { Index },
  router
})

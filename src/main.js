import Vue from 'vue'
import Router from 'vue-router'

import App from './App'
import Home from './pages/Home'
// import About from './pages/About'
/* eslint-disable no-new */
Vue.use(Router)

let router = new Router()

router.map({
  '/home': {
    name: 'home',
    component: Home
  }
  // '/about': {
  //   name: 'about',
  //   component: About
  // }
})

router.redirect({
  '*': '/home'
})

router.start(App, 'app')

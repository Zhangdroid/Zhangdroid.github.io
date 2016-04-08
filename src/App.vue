<template>
  <!--<loader v-show="load"></loader>-->
  <header-section></header-section>
  <router-view keep-alive>
  </router-view>
  <footer-section></footer-section>
</template>

<script>
import HeaderSection from './components/Header'
import FooterSection from './components/Footer'
// import Loader from './components/Loader'

import store from './vuex/store'

export default {
  components: {
//    Loader,
    HeaderSection,
    FooterSection
  },
  store,
  vuex: {
    getters: {
      load: state => state.loading
    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, "Helvetica Neue", "Arial", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, san-serif;
  font-weight: 200;
}
a {
  text-decoration: none;
}
.fade-transition {
  opacity: 1;
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>

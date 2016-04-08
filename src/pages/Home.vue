<template>
  <div v-show="!load" transition="fade" id="home" class="container">
    <div class="center">
      <h1>Rebuilding...</h1>
      <p>Will be back soon.</p>
    </div>
  </div>
</template>

<script>
import config from '../config'

import { loaded } from '../vuex/actions'

export default {
  route: {
    activate () {
      document.title = `${config.title} | Home`
      this.loaded()
    }
  },
  data () {
  },
  vuex: {
    getters: {
      load: state => state.loading
    },
    actions: {
      loaded
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#home {
  height: 100vh;
  width: 100%;
  background-image: url("../assets/home-background.jpg");
  background-size: cover;
  color: #fff;
  text-align: center;
}
</style>

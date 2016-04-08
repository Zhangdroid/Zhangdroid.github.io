<template>
  <footer>
    <p>Crafted with {{{ icon.heart }}} by Zhangdroid © 2016</p>
    <div class="social">
      <a id="github" href="https://github.com/{{config.social.github}}" target="_blank">
        {{{ icon.github }}}
      </a>
      <a id="twitter" href="https://twitter.com/{{config.social.twitter}}">
        {{{ icon.twitter }}}
      </a>
    </div>

  </footer>
</template>

<script>
import github from '../assets/github.svg'
import twitter from '../assets/twitter.svg'
import heart from '../assets/heart.svg'

import config from '../config'

export default {
  data () {
    return {
      icon: {
        github,
        twitter,
        heart
      },
      config
    }
  },
  computed: {
    path () {
      return this.$route.path.substr(1)
    }
  }
}
</script>

<style lang="scss">
footer {
  color: #fff;
  position: absolute;
  width: 100%;
  bottom: 20px;
  text-align: center;
  font-size: 1.1vw;
  svg {
    fill: #fff;
    width: 1.4vw;
    height: 1.4vw;
    min-width: 14px;
    min-height: 14px;
    margin: 0 10px;
    transition: fill .3s ease;
  }
}
#heart {
  margin: 0 2px;
  width: 1vw;
  height: 1vw;
  min-width: 10px;
  min-height: 10px;
  animation: heart-animation .3s infinite alternate;
}
#github svg:hover {
  fill: rgb(22,22,20);
}
#twitter svg:hover {
  fill: rgb(29,161,242);
}
@keyframes heart-animation {
  to {
    transform: scale(1.3,1.3);
  }
}
</style>


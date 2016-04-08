<template>
  <header v-show="!load" transition="header">
    <nav>
      <ul>
        <li v-bind:class="[classNavItem, path.startsWith(item) ? classCurrentNavItem : '']" v-for="item in navigation">
          <a v-link="item">{{ item }}</a>
        </li>
        <li class="nav__line"></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      classNavItem: 'nav__item',
      classCurrentNavItem: 'nav__item--current',
      navigation: ['home', 'blog', 'project', 'about'],
      currentNavigation: 'home'
    }
  },
  ready () {
    this.currentNavigation = this.path
  },
  methods: {
  },
  computed: {
    path () {
      return this.$route.path.substr(1)
    }
  },
  vuex: {
    getters: {
      load: state => state.loading
    }
  }
}
</script>

<style lang="scss">
header {
  position: fixed;
  z-index: 8;
  top: 0;
  left: 0;
  height: 120px;
  width: 100%;
  nav{
    font-size: 14px;
    text-transform: uppercase;
    position: absolute;
    top: 3.5vh;
    right: 3vw;
    ul{
      position: relative;
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      list-style: none;
      a {
        color: #fff;
        display: inline-block;
        width: 100%;
        height: 100%;
        transition: text-shadow .3s;
        &:hover {
          text-shadow: 0 0 12px rgba(255, 255, 255, 0.7);
        }
      }
      @for $i from 1 through 4 {
        .nav__item:nth-child(#{$i}).nav__item--current ~ .nav__line {
          transform: translate3d(100% * ($i - 1) * 2, 0, 0);
        }
      }
    }
  }
  .nav__item {
    cursor: pointer;
    margin: 0;
    width: 80px;
    height: 28px;
    text-align: center;
    transition: color 0.3s;
  }
  .nav__line {
    position: absolute;
    top: 100%;
    left: 20px;
    width: 40px;
    height: 2px;
    pointer-events: none;
    background: #fff;
    transition: transform 0.5s;
    transition-timing-function: cubic-bezier(.63,-0.48,.43,1.47);
  }
}
.header-transition {
  transform: translateY(0);
  transition: transform 1.5s ease;
}
.header-enter, .header-leave {
  transform: translateY(-150%);
}
</style>

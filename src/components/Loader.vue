<template>
  <div class="wrapper" transition="fade">
    <div class="rubik-loader center"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.wrapper {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
}

.rubik-loader {
  width: 64px;
  height: 64px;
  background-image: url(../assets/loader.gif);
  background-size: cover;
  background-position: center;
}
</style>

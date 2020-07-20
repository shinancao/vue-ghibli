<template>
  <div id="app">
    <TheHeader/>
    <div class="main">
      <transition name="el-fade-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import TheHeader from './views/common/TheHeader'
export default {
  name: 'App',
  components: { TheHeader }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  font-family: 'Baloo 2', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
}
.main {
  width: 1000px;
  margin: 0 auto;
}
</style>

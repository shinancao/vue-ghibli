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

<style lang="scss">
  @import './assets/css/app.scss';
</style>

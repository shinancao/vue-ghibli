<template>
  <section>
      <div class="navbar">
        <div class="navbar-inner">
          <div class="classy-navbar">
            <el-menu
              :default-active="activeIndex"
              mode="horizontal"
              text-color="rgba(0, 0, 0, 0.45)"
              active-text-color="#232323"
              :unique-opened="true"
              @select="handleSelect">
              <el-menu-item index="/films" @click="open('/films')">Home</el-menu-item>
              <el-menu-item index="/people" @click="open('/people')">People</el-menu-item>
              <el-menu-item index="/species" @click="open('/species')">Species</el-menu-item>
            </el-menu>
          </div>
        </div>
      </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '/films'
    }
  },
  methods: {
    handleSelect () {},
    open (path) {
      this.$router.push({
        path: path,
        query: {}
      })
    }
  }
}
</script>
<style>
.navbar {
  background-color: #ffffff;
  padding: 0px;
  border-bottom: 1px solid #e4e7ed;
}
.navbar-inner {
  width: 1000px;
  margin: 0 auto;
}
.classy-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between!important;
}
.classy-navbar .el-menu {
  /* background-color: #fff6ec; */
}
.classy-navbar .el-menu--horizontal {
  border-bottom: none;
}
.classy-navbar .el-menu--horizontal .el-menu-item {
  padding: 0 20px;
  display: block;
  border-bottom: none;
  font-size: 1.2rem;
}
.classy-navbar .el-submenu .el-submenu__title {
  border-bottom: none !important;
}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
  background-color: #fff6ec;
}
</style>

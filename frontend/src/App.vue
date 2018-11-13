<template>
  <div id="app">
    <el-container>
      <el-aside class="menu">
        <el-menu class="el-menu-vertical"
                 :collapse="true"
                 default-active="/"
                 @select="handleSelect">
          <div class="menu-elements-wrapper">
            <div class="menu-elements-top-section">
              <el-menu-item index="/">
                <i class="el-icon-search"></i>
                <span slot="title">Szukaj</span>
              </el-menu-item>
              <el-menu-item index="new-opinion">
                <i class="el-icon-plus"></i>
                <span slot="title">Dodaj opinię</span>
              </el-menu-item>
            </div>
            <el-menu-item index="profile" id="last">
              <i class="el-icon-view"></i>
              <span slot="title">Mój profil</span>
            </el-menu-item>
          </div>

        </el-menu>
      </el-aside>
      <router-view/>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    handleSelect(name) {
      this.$router.push(name);
    },
  },
};

</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  body {
    margin: 0;
    height: 100%;
    width: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .menu {
    width: 65px;
    height: 100%;
    position: fixed;
  }

  .menu-elements-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .el-menu-vertical  {
    height: 100%;
  }

  #last {
    margin-bottom: 80%;
  }

</style>

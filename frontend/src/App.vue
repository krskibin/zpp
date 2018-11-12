<template>
    <div id="app">
    <router-view/>
    <el-menu default-active="1" class="el-menu-vertical" :collapse="true">
      <el-menu-item index="1">
          <i class="el-icon-search"></i>
          <span slot="title">Szukaj</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-plus"></i>
        <span slot="title">Dodaj opinię</span>
      </el-menu-item>
      <el-menu-item index="3" id="last">
        <i class="el-icon-view"></i>
        <span slot="title">Mój profil</span>
      </el-menu-item>
    </el-menu>
    </div>
</template>

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

    .el-menu {
      width: 64px;
      top: 0;
      left: 0;
      height: 100%;
      position: absolute !important;
    }

    #last {
    }



</style>

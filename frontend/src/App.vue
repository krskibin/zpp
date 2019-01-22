<template>
  <div id="app">
    <el-container class="app-root-container">
      <el-aside class="app-aside">
        <el-menu class="app-menu-vertical"
                 :collapse="true"
                 default-active="/"
                 @select="handleSelect">
          <div class="menu-elements-wrapper">
            <div class="menu-elements-top-section">
              <el-menu-item index="">
                <eva-icon name="search" animation="pulse"></eva-icon>
                <span slot="title">Szukaj</span>
              </el-menu-item>
              <el-menu-item v-if="userInfo" index="new-opinion">
                <eva-icon name="file-add" animation="pulse"></eva-icon>
                <span slot="title">Dodaj opinię</span>
              </el-menu-item>
              <el-menu-item v-if="userInfo" index="new-restaurant">
                <eva-icon name="plus" animation="pulse"></eva-icon>
                <span slot="title">Dodaj restaurację</span>
              </el-menu-item>
            </div>
            <div>
              <el-menu-item index="profile" id="last">
                <eva-icon name="person" animation="pulse"></eva-icon>
                <span slot="title">Mój profil</span>
              </el-menu-item>
              <el-menu-item v-if="userInfo" @click="logoutUser" id="last">
                <eva-icon name="log-out" animation="pulse"></eva-icon>
                <span slot="title">Wyloguj {{userInfo}}</span>
              </el-menu-item>
            </div>
          </div>
        </el-menu>
      </el-aside>
      <el-main class="app-main">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Getter, Action} from 'vuex-class';


@Component
export default class App extends Vue {
  @Action('logout') logout: any;
  @Getter('getUserId') getUserInfo: any;

  get userInfo(): any {
    return this.getUserInfo;
  }

  handleSelect(name: string) {
    this.$router.push('/' + name);
  }

  logoutUser() {
    this.logout();
    this.$router.go(0);
  }

}
</script>

<style lang="scss">
html {
  margin: 0;
  height: 100%;
  width: 100%;
}

body {
  height: 100%;
  margin: 0
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.app-root-container {
  position: flex;
  height: 100%;
}

.app-aside {
  height: 100%;
  width: 66px !important;
}

.app-menu-vertical  {
  width: 65px;
  height: 99%;

  .menu-elements-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

.app-main {
  margin: 0;
  padding: 0px 0px !important;
}

.eva {
  width: 80%;
  height: 80%;
}

</style>

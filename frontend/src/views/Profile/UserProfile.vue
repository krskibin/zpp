<template>
  <div>
    <el-row> <h1 class="title">Mój profil</h1> </el-row>
    <el-row> <h2 class="label">Adres email</h2> </el-row>
    <el-row> <h3 class="email">ggg@ggg.mail.pl</h3> </el-row>
    <el-row> <h2 class="label">Zmień hasło</h2> </el-row>
    <el-row>
        <el-input class="input" placeholder="Nowe hasło" v-model="input"></el-input>
        <el-button class="btn" >Zmień hasło</el-button>
    </el-row>
  </div>
</template>

<script lang="ts">
import {Vue} from 'vue-property-decorator';
import {Getter, Action} from 'vuex-class';

export default class UserProfile extends Vue {
  name = 'user-profile';
  @Getter('getUserInfo') getUserInfo: any;

  get userInfo(): any {
    return this.$store.state.auth;
  }
}
</script>

<style lang="scss">

.title {
  font-size: 36px;
  font-weight: 800;
  color: #191a1c;
  margin: 60px;
}

.label {
  font-size: 18px;
  font-weight: 800;
  color: #191a1c;
  float: left;
  margin-left: 100px;
  margin-bottom: 18px !important;
  margin-top: 32px !important;
}

.email {
  float: left;
  font-size: 18px;
  font-weight: 400;
  margin-left: 100px;
  margin-top: 0px !important;
  margin-bottom: 16px !important;
}

.input {
  float: left;
  margin-left: 100px;
  width: 450px;
}

.btn {
  float: left;
  margin-left: 64px;
}

</style>

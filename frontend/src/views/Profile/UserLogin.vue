<template>
  <div>
    <h1>Login</h1>
    <el-row>
      <el-col :offset="8" :span="8">
        <el-alert
          title="Wprowadzony adres e-mail lub hasło są nieprawidłowe. Spróbuj ponownie."
          type="error"
          @close="close"
          v-show="showAlert"
          show-icon>
        </el-alert>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="8" :span="8">
        <el-form ref="form" :model="loginForm" class="demo-dynamic">
          <el-form-item
            prop="email"
            label="Email"
            v-bind:class="{ 'is-invalid': showAlert}"
            >
            <el-input v-model="loginForm.email"></el-input>
          </el-form-item>
          <el-form-item
            prop="password"
            label="Hasło"
            >
            <el-input type="password" v-model="loginForm.password" v-bind:class="{ 'is-invalid': showAlert}"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="handleSubmit('login')">Zaloguj się</el-button>
            <el-button @click="handleSelect('register')">Zarejestruj</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Getter, Action} from 'vuex-class';


interface LoginForm {
  email: string;
  password: string;
}

@Component
export default class UserLogin extends Vue {
  @Action('login') login: any;

  name: string = 'user-login';

  showAlert = false;

  loginForm: LoginForm = {
    email: '',
    password: '',
  };

  handleSelect(name: string) {
    this.$router.push(name);
  }

  handleSubmit(name: string) {
    this.login(this.loginForm).then((response: any) => {
      if (response.success) {
        this.$router.push({name: 'home'});
      } else {
        this.showAlert = true;
      }
    });
  }

  close() {
    this.showAlert = false;
  }
}
</script>

<style lang="scss">
input:focus {
  border: solid 2px #f9d3a7 !important;
}

button {
  background-color: #f9d3a7 !important;
  &:focus, &:hover {
    color: black !important;
  }
}
    .is-invalid {
    input {
      border-color: rosybrown;
    }
  }
</style>

<template>
  <div>
    <h1>Register</h1>
    <el-row>
      <el-col :offset="8" :span="8">
        <el-form :model="registerForm" class="demo-dynamic">
          <el-alert
            title="Wprowadzony adres e-mail jest nieprawidłowy."
            type="error"
            @close="close('email')"
            v-show="alertEmail"
            show-icon>
          </el-alert>
          <el-form-item
            prop="email"
            label="Email">
            <el-input v-model="registerForm.email"></el-input>
          </el-form-item>
          <el-alert
            title="Wprowadzone hasło jest za krótkie - minimala ilość znaków: 6"
            type="error"
            @close="close('password')"
            v-show="alertPassword"
            show-icon>
          </el-alert>
          <el-form-item
            prop="password"
            label="Hasło"
            >
            <el-input type="password" v-model="registerForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="validatePasswordEmail">Prześlij</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Getter, Action} from 'vuex-class';

interface RegisterForm {
  email: string;
  password: string;
}

@Component
export default class UserRegister extends Vue {
  @Getter('sendEmailRegister') sendEmailRegister: any;

  name = 'user-register';

  registerForm: RegisterForm = {
    email: '',
    password: '',
  };

  alertEmail: boolean = false;
  alertPassword: boolean = false;

  handleSubmit() {
   return this.$store.state.auth;
  }

  validatePasswordEmail() {
    const re = /\S+@\S+\.\S+/;
    re.test(this.registerForm.email) ? this.alertEmail = false : this.alertEmail = true;
    this.registerForm.password.length > 5 ? this.alertPassword = false : this.alertPassword = true;
    if (this.alertPassword === false && this.alertEmail === false) { this.handleSubmit(); }
  }

  close(type: string) {
    type === 'password' ? this.alertPassword = false :  this.alertEmail = false;
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
</style>

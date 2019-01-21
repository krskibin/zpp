<template>
  <div>
    <img class="imgBackground"
         src="https://u.profitroom.pl/2017.airporthotel.pl/thumb/0x700/uploads/Restauracja_Mirage/Restauracja-Mirage-Hotel-Airport-Okecie-Warszawa010.jpg"/>
    <span class="gradientBackground"/>
    <h1>Register</h1>
    <el-row>
      <el-col :offset="8" :span="8">
        <el-form :model="registerForm" class="demo-dynamic">
          <el-form-item
              prop="email"
              label="Email">
            <el-input v-model="registerForm.email" v-bind:class="{ 'is-invalid': alertEmail}"></el-input>
            <div class="invalid-feedback" v-show="alertEmail">Wprowadzony adres e-mail jest nieprawidłowy</div>
          </el-form-item>
          <el-form-item
              prop="password"
              label="Hasło"
          >
            <el-input type="password" v-model="registerForm.password"
                      v-bind:class="{ 'is-invalid': alertPassword}"></el-input>
            <div class="invalid-feedback marginLeft" v-show="alertPassword">Wprowadzone hasło jest za krótkie - minimala
              ilość znaków: 6
            </div>
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
    @Action('register') register: any;

    name = 'user-register';

    registerForm: RegisterForm = {
      email: '',
      password: '',
    };

    alertEmail: boolean = false;
    alertPassword: boolean = false;

    handleSubmit() {
      this.register({email: this.registerForm.email, password: this.registerForm.password}).then((response: any) => {
        if (response.success) {
          this.$router.push('/login');
        }
      });
    }

    validatePasswordEmail() {
      const re = /\S+@\S+\.\S+/;
      re.test(this.registerForm.email) ? this.alertEmail = false : this.alertEmail = true;
      this.registerForm.password.length > 5 ? this.alertPassword = false : this.alertPassword = true;
      if (this.alertPassword === false && this.alertEmail === false) {
        this.handleSubmit();
      }
    }

    close(type: string) {
      type === 'password' ? this.alertPassword = false : this.alertEmail = false;
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

  .invalid-feedback {
    position: absolute;
    border: 0;
    bottom: -30px;
    margin-left: 5px;
    font-size: 12px;
    color: rosybrown;
  }

</style>

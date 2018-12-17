<template>
  <div class="newRestaurant">
    <el-form model="ruleForm" ref="ruleForm">
      <el-row>
        <h1>Dodaj nową opinię</h1>
      </el-row>
      <el-row :gutter="20">
        <h2 class="h2o">Wybierz restaurację</h2>
      </el-row>
      <el-row :gutter="500">
        <el-form-item prop="name">
          <el-autocomplete
              class="inline-input"
              v-model="ruleForm.name"
              placeholder="Wpisz nazwę restauracji"
              :trigger-on-focus="false"
              v-bind:class="{ 'is-invalid': missingName}"
          ></el-autocomplete>
          <div class="invalid-feedback marginLeft" v-show="missingName">Wybierz restaurację.</div>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <h2 class="h2o" style="margin-top: 30px;">Ocena ogólna</h2>
      </el-row>
      <el-row :gutter="500">
        <el-rate class="general-rate"
                 v-model="value5"
                 show-score
                 text-color="#f9d3a7"
                 score-template="{value} points"
        >
        </el-rate>
      </el-row>

      <el-row :gutter="20">
        <h2 class="h2o" style="margin-top: 30px;">Twoja recenzja</h2>
      </el-row>
      <el-row style="margin-top: 4px;">
        <el-form-item prop="title">
          <el-input class="input" placeholder="Wpisz tytuł recenzji" v-model="ruleForm.title"
                    v-bind:class="{ 'is-invalid': missingTitle}"></el-input>
          <div class="invalid-feedback" v-show="missingTitle">Wpisz tytuł recenzji.</div>
        </el-form-item>
      </el-row>
      <el-form-item prop="description">
        <el-row style="margin-top: 20px;">
          <el-input class="input" type="textarea" :rows="6" placeholder="Napisz swoją recenzję"
                    v-model="ruleForm.description" v-bind:class="{ 'is-invalid': missingDescription}"></el-input>
          <div class="invalid-feedback" v-show="missingDescription">Musisz uzupełnić to pole.</div>
        </el-row>
      </el-form-item>
      <el-row style="margin-top: 30px;">
        <el-col :span="12">
          <el-row :gutter="20">
            <h3>Jedzenie</h3>
          </el-row>
          <el-row :gutter="500">
            <el-rate
                v-model="value5"
                show-score
                text-color="#f9d3a7"
                score-template="{value} points">
            </el-rate>
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-row :gutter="20">
            <h3>Klimat</h3>
          </el-row>
          <el-row :gutter="500">
            <el-rate
                v-model="value5"
                show-score
                text-color="#f9d3a7"
                score-template="{value} points">
            </el-rate>
          </el-row>
        </el-col>
      </el-row>
      <el-row style="margin-top: 30px;">
        <el-col :span="12">
          <el-row :gutter="20">
            <h3>Obsługa</h3>
          </el-row>
          <el-row :gutter="500">
            <el-rate
                v-model="value5"
                show-score
                text-color="#f9d3a7"
                score-template="{value} points">
            </el-rate>
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-row :gutter="20">
            <h3>Cena</h3>
          </el-row>
          <el-row :gutter="500">
            <el-rate
                v-model="value5"
                show-score
                text-color="#f9d3a7"
                score-template="{value} points">
            </el-rate>
          </el-row>
        </el-col>
      </el-row>
      <el-row style="margin-top: 40px; margin-bottom: 50px;">
        <el-button @click="submitForm">Dodaj opinię</el-button>

      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
  interface ruleForm {
    name: string;
    title: string;
    description: string;
  }

  import {Component, Vue} from 'vue-property-decorator';
  import Input from '../../components/input/Input.vue';
  import Stars from '../../components/stars/Stars.vue';

  @Component({
    components: {
      Input,
      Stars,
    },
  })
  export default class NewOpinion extends Vue {
    ruleForm: ruleForm = {
      name: '',
      title: '',
      description: '',
    };
    missingName: boolean = false;
    missingTitle: boolean = false;
    missingDescription: boolean = false;

    submitForm() {
      this.ruleForm.name === '' ? this.missingName = true : this.missingName = false;
      this.ruleForm.title === '' ? this.missingTitle = true : this.missingTitle = false;
      this.ruleForm.description === '' ? this.missingDescription = true : this.missingDescription = false;
    }
  }
</script>

<style lang="scss">

  h1 {
    font-size: 36px;
    font-weight: 800;
    color: #191a1c;
    margin: 60px;
  }

  .h2o {
    font-size: 18px;
    font-weight: 800;
    color: #191a1c;
    float: left;
    margin: 16px;
    margin-left: 100px;
  }

  el-button {
    margin-top: 30px;
  }

  .inline-input {
    width: 600px;
    float: left;
    margin-left: 340px;
  }

  .general-rate {
    float: left;
    margin-left: 340px;
  }

  .input {
    width: 600px;
    float: left;
    margin-left: 90px;
  }

  .newRestaurant {
    position: fixed;
    width: 100%;
    height: 100%;
  }

  .is-invalid {
    textarea {
      border-color: rosybrown;
    }
    input {
      border-color: rosybrown;
    }
  }

  .invalid-feedback {
    position: absolute;
    border: 0;
    bottom: -30px;
    margin-left: 100px;
    font-size: 12px;
    color: rosybrown;
  }

  .marginLeft {
    margin-left: 353px;
  }
</style>

<template>
  <div class="newRestaurant">
    <el-form :model="ruleForm" ref="ruleForm" :rules="rules2">
      <el-row>
        <h1>Dodaj nową opinię</h1>
      </el-row>
      <el-row :gutter="20">
        <h2 class="h2o">Wybierz restaurację</h2>
      </el-row>
      <el-row :gutter="10">
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
      <el-row :gutter="20">
        <el-form-item prop="value1" class="general-rate">
          <el-rate v-model="ruleForm.value1"
                   show-score
                   text-color="#f9d3a7"
                   score-template="{value} points"
                   >
          </el-rate>
        </el-form-item>
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
            <el-form-item prop="value2">
              <el-rate
                v-model="ruleForm.value2"
                show-score
                text-color1="#f9d3a7"
                score-template="{value} points">
              </el-rate>
            </el-form-item>
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-row :gutter="4">
            <h3>Klimat</h3>
          </el-row>
          <el-row :gutter="20">
            <el-form-item prop="value3">
              <el-rate
                v-model="ruleForm.value3"
                show-score
                text-color="#f9d3a7"
                score-template="{value} points">
              </el-rate>
            </el-form-item>
          </el-row>
        </el-col>
      </el-row>
      <el-row style="margin-top: 30px;">
        <el-col :span="12">
          <el-row :gutter="20">
            <h3>Obsługa</h3>
          </el-row>
          <el-row :gutter="500">
            <el-form-item prop="value4">
              <el-rate
                v-model="ruleForm.value4"
                show-score
                text-color="#f9d3a7"
                score-template="{value} points">
              </el-rate>
            </el-form-item>
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-row :gutter="4">
            <h3>Cena</h3>
          </el-row>
          <el-row :gutter="20">
            <el-form-item prop="value5">
              <el-rate
                v-model="ruleForm.value5"
                show-score
                text-color="#f9d3a7"
                score-template="{value} points">
              </el-rate>
            </el-form-item>
          </el-row>
        </el-col>
      </el-row>
      <el-row style="margin-top: 40px; margin-bottom: 50px;">
        <el-button @click="submitForm">Dodaj opinię</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import {Component, Vue} from 'vue-property-decorator';
import Input from '../../components/input/Input.vue';
import Stars from '../../components/stars/Stars.vue';

export default {
  components: {
    Input,
    Stars,
  },
  data() {
    const checkRate = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Please input the rate'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('Please input digits'));
        } else {
          if (value < 1) {
            callback(new Error('Age must be greater than 0'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    return {
      rules2: {
        value1: [
          { validator: checkRate, trigger: 'blur' },
        ],
        value2: [
          { validator: checkRate, trigger: 'blur' },
        ],
        value3: [
          { validator: checkRate, trigger: 'blur' },
        ],
        value4: [
          { validator: checkRate, trigger: 'blur' },
        ],
        value5: [
          { validator: checkRate, trigger: 'blur' },
        ],
      },
      ruleForm: {
        name: '',
        title: '',
        description: '',
        value1: 0,
        value2: 0,
        value3: 0,
        value4: 0,
        value5: 0,
      },
      missingName: false,
      missingTitle: false,
      missingDescription: false,
    };
  },
  methods: {
    submitForm() {
      this.ruleForm.name === '' ? this.missingName = true : this.missingName = false;
      this.ruleForm.title === '' ? this.missingTitle = true : this.missingTitle = false;
      this.ruleForm.description === '' ? this.missingDescription = true : this.missingDescription = false;

      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          alert('Error!');
          return false;
        }
      });
    },
  },
};
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
  margin-left: 95px;
}

.general-rate {
  float: left;
  margin-left: 97px;

}

.input {
  width: 600px;
  float: left;
  margin-left: 90px;
}

.newRestaurant {
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

.el-form-item__error {
  position: relative;
  margin-left: -50px;
}

.marginLeft {
  margin-left: 353px;
}
</style>

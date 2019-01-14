<template>
  <div class="newRestaurant">
    <el-row>
      <h1>Nowa restauracja</h1>
    </el-row>
    <el-row :gutter="20">
      <h2 class="h2o">Nazwa restauracji</h2>
    </el-row>
    <el-row>
      <el-input class="input" placeholder="Wpisz nazwę restauracji" v-model="input"></el-input>
    </el-row>
    <el-row  :gutter="20">
      <h2 class="h2o">Opis restauracji</h2>
    </el-row>
    <el-row>
      <el-input class="input" type="textarea" :rows="6" placeholder="Opisz restaurację" v-model="opinionForm.textarea"></el-input>
    </el-row>
    <el-row  :gutter="20">
      <h2 class="h2os">Dodatkowe informacje</h2>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-row><h3 class="h3o">Danie wegetariańskie</h3></el-row>
        <el-row>
          <el-select class="yn-select"v-model="value" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-row>
      </el-col>
      <el-col :span="12">
        <el-row><h3 class="h3o">Danie wegańskie</h3></el-row>
        <el-row>
          <el-select class="yn-select"v-model="value" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-row>
      </el-col>
    </el-row>
    <el-row style="margin-top: 30px;">
      <el-col :span="12">
        <el-row><h3 class="h3o">Dostępna toaleta</h3></el-row>
        <el-row>
          <el-select class="yn-select"v-model="value" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-row>
      </el-col>
      <el-col :span="12">
        <el-row><h3 class="h3o">Dozwolone psy</h3></el-row>
        <el-row>
          <el-select class="yn-select"v-model="value" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-row>
      </el-col>
    </el-row>



        <el-row :gutter="500" style="margin-top: 80px; margin-bottom: 50px;">
          <el-button>Dodaj restaurację</el-button>
        </el-row>

  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Input from '../../components/input/Input';

@Component({
  components: {
    Input,
  },
})
export default class NewRestaurant extends Vue {

  opinionForm: object = {
    textarea: '',
  };

  /*options: [{
          value: 'Tak',
          label: 'Tak'
        }, {
          value: 'Nie',
          label: 'Nie'
        }],
        value: ''*/
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
    margin-top: 30px;
  }

  .h3o {
    font-size: 16px;
    font-weight: 500;
    color: #191a1c;
    margin: 16px;
  }

  .h2os {
    font-size: 18px;
    font-weight: 800;
    color: #191a1c;
    margin-top: 52px;
  }

  .yn-select {
  }

  .input {
    width: 600px;
    float: left;
    margin-left: 90px;
  }

  .inline-input {
    width: 600px;
    float: left;
    margin-left: 340px;
  }

</style>

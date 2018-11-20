<template>
  <div class="newRestaurant">
    <el-row>
      <h1>Dodaj nową opinię</h1>
    </el-row>
    <el-row :gutter="20">
      <h2 class="h2o">Wybierz restaurację</h2>
    </el-row>
    <el-row :gutter="500">
      <el-autocomplete
        class="inline-input"
        v-model="state2"
        :fetch-suggestions="querySearch"
        placeholder="Wpisz nazwę restauracji"
        :trigger-on-focus="false"
        @select="handleSelect"
      ></el-autocomplete>
    </el-row>
    <el-row :gutter="20">
      <h2 class="h2o" style="margin-top: 30px;">Ocena ogólna</h2>
    </el-row>
    <el-row :gutter="500">
      <el-rate class="general-rate"
        v-model="value5"
        show-score
        text-color="#f9d3a7"
        score-template="{value} points">
      </el-rate>
    </el-row>

    <el-row :gutter="20">
      <h2 class="h2o" style="margin-top: 30px;">Twoja recenzja</h2>
    </el-row>
    <el-row style="margin-top: 4px;">
      <el-input class="input" placeholder="Wpisz tytuł recenzji" v-model="input"></el-input>
    </el-row>
    <el-row style="margin-top: 20px;">
      <el-input class="input" type="textarea" :rows="6" placeholder="Napisz swoją recenzję" v-model="textarea"></el-input>
    </el-row>
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
    <el-row :gutter="500" style="margin-top: 40px; margin-bottom: 50px;">
      <el-button>Dodaj opinię</el-button>
    </el-row>
  </div>
</template>

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

</style>

<script>
import {Component, Vue} from 'vue-property-decorator';
import Input from '../../components/input/Input';
import Stars from '../../components/stars/Stars';

@Component({
  components: {
    Input,
    Stars,
  },
})

export default class NewOpinion extends Vue {
  data() {
    return {
      textarea: ''
    }
  }

}

</script>

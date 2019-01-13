<template>
  <div class="newRestaurant">
    <el-form model="ruleForm" ref="ruleForm">
      <el-row>
        <h1>Dodaj nową opinię</h1>
      </el-row>
      <el-row>
        <el-col :offset="3" :span="7">
          <el-form-item prop="restaurant">
            <h2 class="h2o">Wybierz restaurację</h2>
            <el-select v-model="ruleForm.restaurant" filterable placeholder="Wybierz restaurację">
              <el-option
                  v-for="item in restaurantName"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="description">
            <h2 class="h2o" style="margin-top: 30px;">Twoja recenzja</h2>
            <el-input class="input" type="textarea" :rows="6" placeholder="Napisz swoją recenzję"
                      v-model="ruleForm.description" v-bind:class="{ 'is-invalid': missingDescription}"></el-input>
            <div class="invalid-feedback" v-show="missingDescription">Musisz uzupełnić to pole.</div>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item prop="foodReview">
            <h3>Jedzenie</h3>
            <el-rate
                v-model="ruleForm.foodReview"
                show-score
                text-color="#f9d3a7"
                score-template="{value} points">
            </el-rate>
          </el-form-item>

          <el-form-item prop="climateReview">
            <h3>Klimat</h3>
            <el-rate
                v-model="ruleForm.climateReview"
                show-score
                text-color="#f9d3a7"
                score-template="{value} points">
            </el-rate>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item prop="staffReview">
            <h3>Obsługa</h3>
            <el-rate
                v-model="ruleForm.staffReview"
                show-score
                text-color="#f9d3a7"
                score-template="{value} points">
            </el-rate>
          </el-form-item>

          <el-form-item prop="priceReview">
            <h3>Cena</h3>
            <el-rate
                v-model="ruleForm.priceReview"
                show-score
                text-color="#f9d3a7"
                score-template="{value} points">
            </el-rate>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
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
    restaurant: '';
    foodReview: number;
    climateReview: number;
    staffReview: number;
    priceReview: number;
  }

  import {Component, Vue} from 'vue-property-decorator';
  import Input from '../../components/input/Input.vue';
  import Stars from '../../components/stars/Stars.vue';
  import {Getter, Action} from 'vuex-class';

  @Component({
    components: {
      Input,
      Stars,
    },
  })
  export default class NewOpinion extends Vue {
    @Action('getRestaurantIdName') getRestaurantIdName: any;
    @Getter('getRestaurantElement') restaurant: any;

    get restaurantName(): any {
      return this.$store.state.restaurants.restaurantIDName;
    }

    private created() {
      this.getRestaurantIdName();
    }

    ruleForm: ruleForm = {
      name: '',
      title: '',
      description: '',
      restaurant: '',
      foodReview: 0,
      climateReview: 0,
      staffReview: 0,
      priceReview: 0,
    };

    missingName: boolean = false;
    missingTitle: boolean = false;
    missingDescription: boolean = false;

    submitForm() {
      console.log(this.ruleForm.restaurant)
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
    margin-left: 0px;
  }

  el-button {
    margin-top: 30px;
  }

  .inline-input {
    width: 600px;
    float: left;
  }

  .general-rate {
    float: left;
    margin-left: 340px;
  }

  .input {
    width: 600px;
    float: left;
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

  .el-select {
    width: 100%;
  }
</style>

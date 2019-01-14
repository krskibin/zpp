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
          <el-form-item prop="short_review">
            <h2 class="h2o" style="margin-top: 30px;">Twoja recenzja</h2>
            <el-input class="input" type="textarea" :rows="6" placeholder="Napisz swoją recenzję"
                      v-model="ruleForm.short_review" v-bind:class="{ 'is-invalid': missingDescription}"></el-input>
            <div class="invalid-feedback" v-show="missingDescription">Musisz uzupełnić to pole.</div>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item prop="food_review">
            <h3>Jedzenie</h3>
            <el-rate
                v-model="ruleForm.food_review"
                show-score
                text-color="#f9d3a7"
                score-template="{value} points">
            </el-rate>
          </el-form-item>

          <el-form-item prop="climate_review">
            <h3>Klimat</h3>
            <el-rate
                v-model="ruleForm.climate_review"
                show-score
                text-color="#f9d3a7"
                score-template="{value} points">
            </el-rate>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item prop="staff_review">
            <h3>Obsługa</h3>
            <el-rate
                v-model="ruleForm.staff_review"
                show-score
                text-color="#f9d3a7"
                score-template="{value} points">
            </el-rate>
          </el-form-item>

          <el-form-item prop="price_review">
            <h3>Cena</h3>
            <el-rate
                v-model="ruleForm.price_review"
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
    date: string;
    receiptNumber: string;
    restaurant: '';
    food_review: number;
    climate_review: number;
    staff_review: number;
    price_review: number;
    short_review: string;
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
    @Action('addOpinion') addOpinion: any;

    get restaurantName(): any {
      return this.$store.state.restaurants.restaurantIDName;
    }

    private created() {
      this.getRestaurantIdName();
    }

    ruleForm: ruleForm = {
      date: new Date().toJSON().slice(0, 10).replace(/-/g, '/').toString(),
      receiptNumber: 'x',
      restaurant: '',
      food_review: 0,
      climate_review: 0,
      staff_review: 0,
      price_review: 0,
      short_review: '',
    };

    missingName: boolean = false;
    missingDescription: boolean = false;

    submitForm() {
      this.ruleForm.restaurant === '' ? this.missingName = true : this.missingName = false;
      this.ruleForm.short_review === '' ? this.missingDescription = true : this.missingDescription = false;
      this.addOpinion({
        date: this.ruleForm.date,
        reciptNumber: this.ruleForm.receiptNumber,
        restaurant: this.ruleForm.restaurant,
        food_review: this.ruleForm.food_review,
        climate_review: this.ruleForm.climate_review,
        staff_review: this.ruleForm.staff_review,
        price_review: this.ruleForm.price_review,
        short_review: this.ruleForm.short_review,
      }).then((response: any) => {
        if (response.success) {
          this.$router.push('/');
        }
        else {
          console.log(response);
        }
      });
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

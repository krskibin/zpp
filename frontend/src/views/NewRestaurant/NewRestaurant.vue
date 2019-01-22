<template>
  <div class="newRestaurant">
    <img class="imgBackground"
         src="https://u.profitroom.pl/2017.airporthotel.pl/thumb/0x700/uploads/Restauracja_Mirage/Restauracja-Mirage-Hotel-Airport-Okecie-Warszawa010.jpg"/>
    <span class="gradientBackground"/>
    <h1>Dodaj restaurację:</h1>
    <el-form :model="restaurantAddForm" class="demo-dynamic">
      <el-row>
        <el-col :offset="3" :span="7">
          <el-form-item
              prop="name">
            <h2 class="h2Label">Nazwa restauracji:</h2>
            <el-input v-model="restaurantAddForm.name" placeholder="Wpisz nazwę restauracji"></el-input>
          </el-form-item>
          <el-form-item
              prop="longitude">
            <h2 class="h2Label">Długość geograficzna:</h2>
            <el-input v-model="restaurantAddForm.longitude"></el-input>
          </el-form-item>
          <el-form-item
              prop="latitude">
            <h2 class="h2Label">Szerokość geograficzna:</h2>
            <el-input v-model="restaurantAddForm.latitude"></el-input>
          </el-form-item>
          <el-form-item
              prop="food_type">
            <h2 class="h2Label">Rodzaj kuchni:</h2>
            <el-input v-model="restaurantAddForm.food_type" placeholder="Wpisz rodzaj kuchni"></el-input>
          </el-form-item>
          <el-form-item
              prop="price_rating">
            <h2 class="h2Label">Ocena:</h2>
            <el-input v-model="restaurantAddForm.price_rating"></el-input>
          </el-form-item>
        </el-col>
        <el-col :offset="4" :span="7">
          <el-form-item
              prop="vegan">
            <h2 class="h2Label">Kuchnia wegańska:</h2>
            <el-checkbox v-model="restaurantAddForm.vegan"></el-checkbox>
          </el-form-item>
          <el-form-item
              prop="vegetarian">
            <h2 class="h2Label">Kuchnia wegetariańska:</h2>
            <el-checkbox v-model="restaurantAddForm.vegetarian"></el-checkbox>
          </el-form-item>
          <el-form-item
              prop="short_review">
            <h2 class="h2Label">Krótki opis:</h2>
            <el-input type="textarea" placeholder="Wpisz krótki opis"
                      v-model="restaurantAddForm.short_review"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-button @click="handleSubmit">Dodaj</el-button>
    </el-form>

  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {Getter, Action} from 'vuex-class';

  interface IAddRestaurantForm {
    name: string;
    longitude: number;
    latitude: number;
    food_type: string;
    short_review: string;
    vegetarian: boolean;
    vegan: boolean;
    price_rating: number;

  }

  @Component({
    components: {
      name,
    },
  })


  export default class NewRestaurant extends Vue {
    @Action('addRestaurant') addRestaurant: any;

    restaurantAddForm: IAddRestaurantForm = {
      name: '',
      longitude: 0,
      latitude: 0,
      food_type: '',
      short_review: '',
      vegetarian: false,
      vegan: false,
      price_rating: 0,
    };

    handleSubmit() {
      this.addRestaurant({
        name: this.restaurantAddForm.name,
        longitude: this.restaurantAddForm.longitude,
        latitude: this.restaurantAddForm.latitude,
        food_type: this.restaurantAddForm.food_type,
        short_review: this.restaurantAddForm.short_review,
        vegetarian: this.restaurantAddForm.vegetarian,
        vegan: this.restaurantAddForm.vegan,
        price_rating: this.restaurantAddForm.price_rating,
      }).then((response: any) => {
        if (response.success) {
          this.$router.push('/');
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

  .h2Label {
    font-size: 18px;
    font-weight: 800;
    color: #191a1c;
    float: left;
    margin: 16px;
    margin-left: 0;
  }
</style>

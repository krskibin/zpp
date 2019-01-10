<template>
  <div class="newRestaurant">
    <el-row>
      <el-col :offset="8" :span="8">
        <el-form :model="restaurantAddForm" class="demo-dynamic">
          <el-form-item
              prop="name"
              label="Nazwa restauracji">
            <el-input v-model="restaurantAddForm.name"></el-input>
          </el-form-item>
          <el-form-item
              prop="longitude"
              label="Adres">
            <el-input v-model="restaurantAddForm.longitude"></el-input>
          </el-form-item>
             <el-form-item
              prop="latitude"
              label="Adres">
            <el-input v-model="restaurantAddForm.latitude"></el-input>
          </el-form-item>
          <el-form-item
              prop="food_type"
              label="Rodzaj kuchni">
            <el-input v-model="restaurantAddForm.food_type"></el-input>
          </el-form-item>

          <el-form-item
              prop="price_rating"
              label="Ocena">
            <el-input v-model="restaurantAddForm.price_rating"></el-input>
          </el-form-item>

          <el-form-item
              prop="vegan"
              label="Vegan">
            <el-checkbox v-model="restaurantAddForm.vegan"></el-checkbox>
          </el-form-item>

          <el-form-item
              prop="vegetarian"
              label="Vegetarian">
            <el-checkbox v-model="restaurantAddForm.vegetarian"></el-checkbox>
          </el-form-item>

          <el-form-item
              prop="short_review"
              label="Krótki opis">
            <el-input v-model="restaurantAddForm.short_review"></el-input>
          </el-form-item>

          <el-button @click="handleSubmit">Dodaj</el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Input from '../../components/input/Input';
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
      Input,
      name
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
      price_rating: 0
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
        price_rating: this.restaurantAddForm.price_rating
      }).then((response: any) => {
        if (response.success) {
          console.log(this.restaurantAddForm.name);
          this.$router.push('/');
        }
        else {
          console.log(response)
        }
      });
    }
  }
</script>
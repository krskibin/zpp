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
              prop="location"
              label="Adres">
            <el-input v-model="restaurantAddForm.location"></el-input>
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
    location: string;
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
      location: '',
    };

    handleSubmit() {
      this.addRestaurant({
        name: this.restaurantAddForm.name,
        location: this.restaurantAddForm.location
      }).then((response: any) => {
        if (response.success) {
          this.$router.push('/');
        }
      });
    }
  }
</script>
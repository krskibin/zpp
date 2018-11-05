<template>
  <div class="home">
    <div style="font-size:50px; margin: 85px;">LOGO</div>
    <el-row>
      <Input id="searchInput"/>
      <el-col :span="1" ><el-button id="searchButton">Szukaj</el-button></el-col>
    </el-row>
    <el-row>
      <h2>Ostatnio dodane:</h2>
    </el-row>
  <Card/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

import RestaurantList from '@/components/restaurantList/RestaurantList.vue';
import Input from '../../components/input/Input';
import Card from '../../components/Card';

@Component({
  components: {
    RestaurantList, Input, Card
  },
})
export default class Home extends Vue {
  @Action('getRestaurants') getRestaurants: any;
  @Getter('getRestaurantList') restaurants: any;

  private created() {
    this.getRestaurants();
  }
}
</script>
<style lang="scss">
    #searchInput {
      div{
        input:focus {
            border: solid 2px #f9d3a7;
        }
      }
    }
  h2 {
    font-family: 'Open Sans', sans-serif;
    font-size: 28px;
    font-weight: 500;
    color: #191a1c;
    margin: 65px;
  }
  #searchButton {
    margin-left: 20px;
    background-color: #f9d3a7;
  }
</style>
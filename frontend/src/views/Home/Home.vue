
<template>

  <div>
    <img class="imgBackground"
         src="https://u.profitroom.pl/2017.airporthotel.pl/thumb/0x700/uploads/Restauracja_Mirage/Restauracja-Mirage-Hotel-Airport-Okecie-Warszawa010.jpg"/>
    <span class="gradientBackground"/>
    <div class="home">
      <i class="material-icons" style="font-size:100px; margin: 80px;">
        fastfood
      </i>
      <el-row>
        <Input id="searchInput"/>
        <el-col :span="1">
          <el-button id="searchButton">
            Szukaj
          </el-button>
        </el-col>
      </el-row>
      
      <el-row>
        <RestaurantCard :restaurants='restaurants'/>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {Getter, Action} from 'vuex-class';

  import RestaurantList from '@/components/restaurantList/RestaurantList.vue';
  import Input from '@/components/input/Input.vue';
  import RestaurantCard from '@/components/card/RestaurantCard.vue';

  @Component({
    components: {
      RestaurantList, Input, RestaurantCard,
    },
  })
  export default class Home extends Vue {
    @Action('getRestaurants') getRestaurants: any;
    @Getter('getRestaurantList') restaurantList: any;

    get restaurants() {
      return this.restaurantList;
    }

    private created() {
      this.getRestaurants();
    }
  }
</script>



<style lang="scss">

  h2 {
    font-family: 'Open Sans', sans-serif;
    font-size: 28px;
    font-weight: 500;
    color: #191a1c;
    margin: 65px;
  }

  #searchInput {
    div {
      input:focus {
        border: solid 2px #f9d3a7;
      }
    }
  }

  #searchButton {
    margin-left: 20px;
    background-color: #f9d3a7;
    &:focus, &:hover {
      color: black;
    }
  }
</style>

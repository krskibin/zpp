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
        <h2>
          Ostatnio dodane:
        </h2>
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

  .backgroundImage {
    background-size: cover;
    background-attachment: fixed;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    top: 0;
    left: 65px;
  }

  .backgroundImage:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 300px;
    bottom: 0;
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 20%, rgba(0, 212, 255, 0) 100%);
    opacity: 1;
  }

  .imgBackground {
    opacity: 0.1;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .gradientBackground {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 1;
    z-index: -1;
    background: linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  }
</style>

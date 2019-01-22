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
          <el-select
            style="width: 50vh"
            id="searchInput"
            v-model="value9"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="Please enter a keyword"
            :remote-method="remoteMethod"
            :loading="loading">
            <el-option
              v-for="item in restaurants"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-row>
        <el-row>
          <RestaurantCard :restaurants='value'/>
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
  value9 = [];
  loading = false;
  restaurants = [];

    get value() {
      const res: any[] = [];
      let rest: any = {};
      if (this.value9.length > 0) {
        for (const val of this.value9) {
          for (rest of this.restaurants) {
            if (rest.id === undefined) {
              return;
            }
            if (rest.id === val) {
              res.push(rest);
          }
        }
      }
        return res;
      }
      return this.restaurantList;
  }

  remoteMethod(query: string) {
    if (query !== '') {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.restaurants = this.restaurants.filter((item: any) => {
          return item.name.toLowerCase()
            .indexOf(query.toLowerCase()) > -1;
        });
      }, 200);
    } else {
      this.restaurants = this.restaurantList;
    }
  }

  private created() {
    this.getRestaurants().then(() => {
      this.restaurants = this.restaurantList; });
    }
  }
</script>



<style scoped lang="scss">

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

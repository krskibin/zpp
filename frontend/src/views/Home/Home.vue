<template>
  <div>
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
      <RestaurantList/>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Getter, Action} from 'vuex-class';

import RestaurantList from '@/components/restaurantList/RestaurantList.vue';
import Input from '@/components/input/Input.vue';

@Component({
    components: {
        RestaurantList, Input,
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
</style>

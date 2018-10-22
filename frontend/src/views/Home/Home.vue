<template>
  <div class="home">
    <RestaurantList :restaurants="restaurants"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

import RestaurantList from '@/components/restaurantList/RestaurantList.vue';

@Component({
  components: {
    RestaurantList,
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

<template>
  <div class="home">
    <RestaurantList :restaurants="restaurants"/>
  </div>
</template>

<script lang="ts">

    import {Component, Vue} from 'vue-property-decorator';
    import {Getter, Action} from 'vuex-class';

    import RestaurantList from '@/components/restaurantList/RestaurantList.vue';
    import Input from '@/components/input/Input.vue';

    @Component({
        components: {
            RestaurantList, Input
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

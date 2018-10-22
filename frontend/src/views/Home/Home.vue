<template>
    <div class="home">
        <RestaurantList/>
    </div>
</template>

<script lang="ts">
    import 'element-ui/lib/theme-chalk/index.css'
    import {Component, Vue} from 'vue-property-decorator';
    import RestaurantList from '../../components/restaurantList/RestaurantList'

    @Component({
        components: {
            RestaurantList
        },
    })
    export default class Home extends Vue {
    }
</script>

<template>
  <div>
    <el-row type="flex" class="row-bg" justify="space-around" v-for="(restaurant, index) in restaurants" :key="restaurant.id" :style="{ margin: '60px'}">
        <el-col :span="8">
          <el-card :body-style="{ padding: '0px'}">
            <img :src="getImagePath(restaurant.image)" class="image">
            <div style="padding: 14px;">
              <span>{{restaurant.name}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button" @click='goToRestaurantPage(restaurant.id)'>More</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component({
  props: {
    restaurants: {
    },
  }
})
export default class RestaurantCard extends Vue {
  getImagePath(imagefile) {
    if (imagefile.length > 0) {
      return imagefile[0].imagefile.replace('backend:8000', window.location.host)
    }
    return 'https://u.profitroom.pl/2017.airporthotel.pl/thumb/0x700/uploads/Restauracja_Mirage/Restauracja-Mirage-Hotel-Airport-Okecie-Warszawa010.jpg'
  }
  goToRestaurantPage(restaurantId) {
    console.log(restaurantId)
    this.$router.push({ name: 'viewRestaurant', params: { id: restaurantId } })
  }
}
</script>

<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>

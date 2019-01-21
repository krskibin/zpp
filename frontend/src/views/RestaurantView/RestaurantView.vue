<template>
  <div>
    <img class="imgBackground"
         src="https://u.profitroom.pl/2017.airporthotel.pl/thumb/0x700/uploads/Restauracja_Mirage/Restauracja-Mirage-Hotel-Airport-Okecie-Warszawa010.jpg"/>
    <span class="gradientBackground"/>
    <el-row>
      <el-col :span="24"><h1 class="centerText">{{restaurantInfo.restaurant.name}}</h1></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><h3 class="centerText">{{restaurantInfo.restaurant.foodType}}</h3></el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-rate v-model="restaurantInfo.restaurant.longitude" disabled class="starsBig"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="centerText">
        <el-button class="buttonStyle" @click="routeToNewOpinion">
          Dodaj opinię
        </el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10" :offset="3">
        <h2 class="left">Opis restauracji</h2>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18" :offset="3" class="addInfo">
        <p>{{restaurantInfo.restaurant.shortReview}}</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10" :offset="3">
        <h2 class="left">Dodatkowe informacje</h2>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18" :offset="3" class="addInfo">
        <p>Dania wegetariańskie: {{restaurantInfo.restaurant.vegetarianOption ? "Tak" : "Nie"}}</p>
        <p>Dania wegańskie: {{restaurantInfo.restaurant.veganOption ? "Tak" : "Nie"}}</p>
        <p>Dostępna toaleta:</p>
        <p>Dozwolone psy:</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><h1 class="centerText">Opinie o lokalu</h1></el-col>
    </el-row>
    <el-row class="rowOpinions" v-for="(opinion, index) in opinionsArray">
      <el-col :span="8" style="margin: 10px 0px 10px 0px">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span><b style="color: #f9d3a7">OPINIA NR: </b>{{index}} | <b style="color: #f9d3a7">ID: </b>{{opinion.id}}</span>
          </div>
          <b>Jedzenie:</b>
          <el-rate v-model="opinion.foodReview" disabled/>
          <b>Klimat:</b>
          <el-rate v-model="opinion.climateReview" disabled/>
          <b>Obsługa:</b>
          <el-rate v-model="opinion.staffReview" disabled/>
          <b>Cena:</b>
          <el-rate v-model="opinion.priceReview" disabled/>
          <p style="text-align: left "><b>Opinia:</b>
            {{opinion.shortReview}}</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">

import {Component, Vue} from 'vue-property-decorator';
import {Getter, Action} from 'vuex-class';
import Opinion from '../../components/opinion/Opinion.vue';

@Component({
  components: {
    Opinion,
  },
})
export default class RestaurantView extends Vue {
  @Action('getRestaurantOpinion') getRestaurantOpinion: any;
  @Action('getRestaurant') getRestaurant: any;
  @Getter('getRestaurantElement') restaurant: any;
  @Getter('getOpinions') opinions: any;

  get restaurantInfo(): any {
    return this.$store.state.restaurant;
  }

  get opinionsArray(): any {
    return this.$store.state.restaurant.opinions;
  }

  private created() {
    var id = this.$route.params.id
    this.getRestaurantOpinion(id);
    this.getRestaurant(id);
  }

  routeToNewOpinion() {this.$router.push('/new-opinion');}

}
</script>

<style lang="scss">
.rowOpinions {
  margin: 10px 0 10px 0;
  :nth-child(2) {
    margin-left: 10px;
    margin-right: 10px;
  }
}

h1.centerText {
  margin-top: 100px;
  margin-bottom: 0;
  font-size: 56px;
  font-weight: bold;
  color: #191a1c;
}

h3.centerText {
  margin-top: 16px;
  font-size: 22px;
  font-weight: bold;
  color: #191a1c;
}

.starsBig {
  height: 30px !important;
  margin-bottom: 30px;
  span {
    i {
      font-size: 30px;
    }
  }
}

.buttonStyle {
  background-color: #f9d3a7 !important;
  font-size: 20px !important;
  &:focus, &:hover {
    color: black !important;
  }
}

.addInfo {
  p {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
  }
}

h2.left {
  margin: 30px 0 30px 0;
  font-weight: bold;
  color: #191a1c;
  text-align: left;
}
</style>

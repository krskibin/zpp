<template>
  <div>
    <el-row>
      <el-col :span="24"><h1 class="centerText">Nazwa restauracji</h1></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><h3 class="centerText">rodzaj kuchni</h3></el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <Stars class="centerText"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="centerText">
        <el-button>
          Dodaj opinię
        </el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10" :offset="3">
        <h2>Opis restauracji</h2>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18" :offset="3" class="addInfo">
        <p>{{restaurant.shortReview}}</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10" :offset="3">
        <h2>Dodatkowe informacje</h2>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18" :offset="3" class="addInfo">
        <p>Dania wegetariańskie: {{restaurant.vegetarianOption ? "Tak" : "Nie"}}</p>
        <p>Dania wegańskie: {{restaurant.veganOption ? "Tak" : "Nie"}}</p>
        <p>Dostępna toaleta:</p>
        <p>Dozwolone psy:</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><h2 class="centerText">Opinie o lokalu</h2></el-col>
    </el-row>
    <el-row class="rowOpinions">
      <el-col :span="6" :offset="3">
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="10" :offset="3">
        <h2>Dodatkowe informacje</h2>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18" :offset="3">
        <p>Dania wegetariańskie:</p>
        <p>Dania wegańskie:</p>
        <p>Dostępna toaleta:</p>
        <p>Dozwolone psy:</p>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24"><h1 class="centerText">Opinie o lokalu</h1></el-col>
    </el-row>

    <el-row class="rowOpinions">
      <el-col :span="6" :offset="3">
        <Opinion/>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Getter, Action} from 'vuex-class';

import Stars from '@/components/stars/Stars.vue';
import Opinion from '../../components/opinion/Opinion.vue';

@Component({
  components: {
    Stars,
    Opinion,
  },
})
export default class RestaurantView extends Vue {
  @Action('getRestaurant') getRestaurant: any;
  @Getter('getRestaurantElement') restaurant: any;

  private created() {
    this.getRestaurant(this.$route.params.id);
  }
}
</script>

<style>
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
  }
}

h2 {
  margin: 30px 0 30px 0;
  font-weight: bold;
  color: #191a1c;
}
</style>

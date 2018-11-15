<template>
  <div class="containerOpinion">
    <div class="titleOpinion">
      <b>Tytuł opinii</b>
    </div>
    <Stars/>
    treść opinii

    <el-row class="textVersionOpinion">
      <el-col :span="10">
        Jedzenie
      </el-col>
      <el-col :span="10">
        <Stars/>
      </el-col>
    </el-row>
    <el-row class="textVersionOpinion">
      <el-col :span="10">
        Klimat
      </el-col>
      <el-col :span="10">
        <Stars/>
      </el-col>
    </el-row>
    <el-row class="textVersionOpinion">
      <el-col :span="10">
        Obsługa
      </el-col>
      <el-col :span="10">
        <Stars/>
      </el-col>
    </el-row>
    <el-row class="textVersionOpinion">
      <el-col :span="10">
        Cena
      </el-col>
      <el-col :span="10">
        <Stars/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Stars from '../stars/Stars.vue';

export default {
  components: {
    Stars,
  },
};
</script>

<style lang="scss">
.containerOpinion {
  border-radius: 5px;
  border: solid 2px #d8d8d8;
  text-align: left;
  padding: 10px;
}

.textVersionOpinion {
  font-weight: bold;
  padding: 10px;
}
</style>

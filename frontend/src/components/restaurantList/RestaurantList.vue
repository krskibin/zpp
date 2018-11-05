<template>
  <div class="container"
    :data="tableData">
   <el-row :gutter="10">
      <el-col :span="6" offset="1">
        <div class="containerRestaurant">
          <div class="titleOpinion"> Nazwa
            <template slot-scope="scope">
              {{ scope.row.name }}
            </template>
            <a>Pokaż opinię</a>
          </div>
          <div class="opinionText">
            Zamówiliśmy kaczkę, kilka dań z kurczaka oraz zupy. Kaczka była po prostu rewelacyjna:
            idealnie zrobiona podana z pure ziemiaczano truflowym. Kurczak niestety był bardzo twardy ale szef kuchni zaproponował,
            że zrobi go jeszcze raz. Zupy ok, choć rosół przypominał bardziej orientalna zupę z kurczakiem.
          </div>
        </div>
      </el-col>
   </el-row>
  </div>
</template>

<script>
export default {
  props: {
    restaurants: {
        type: Array,
        required: true,
    },
  },
  data() {
    return {
      tableData: this.restaurants,
    };
  },
  methods: {
    handleEdit(index) {
      //
    },
  },
};
</script>

<style lang="scss">
    .containerRestaurant {
        width: 100%;
        border-radius: 5px;
        border: solid 2px #d8d8d8;
        background-color: #ffffff;
        margin: 10px;
    }
    .container {
        margin-left: 20%;
        margin-right: 15%;
    }
    .titleOpinion{
        padding: 10px;
        border-bottom: solid 2px #dddddd;
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        font-weight: bold;
        text-align: left;
        :last-child{
            float: right;
        }
    }
    .opinionText{
        padding: 10px;
        font-family: 'Open Sans', sans-serif;
        font-size: 13px;
        font-weight: bold;
        text-align: left;
    }
</style>
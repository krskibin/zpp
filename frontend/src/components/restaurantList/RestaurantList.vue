<template>
  <el-table
    :data="tableData"
    style="width: 100%">

    <el-table-column
      label="Nazwa"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="Adres"
      width="300">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.address }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="Ocena"
      width="300">
      <template slot-scope="scope">
        <span style="margin-left: 10px">
          <el-rate
            v-model="scope.row.avgRating"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value} points">
          </el-rate>
        </span>
      </template>
    </el-table-column>

    <el-table-column
      label="Dodaj opinię">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Dodaj opinię
        </el-button>
      </template>
    </el-table-column>

  </el-table>
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
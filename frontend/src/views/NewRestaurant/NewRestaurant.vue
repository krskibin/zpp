<template>
  <div class="newRestaurant">
    <el-row :gutter="20">
      Nazwa restauracji:
    </el-row>
    <el-row :gutter="500">
      <Input/>
    </el-row>
    <el-row :gutter="20">
      Adres:
    </el-row>
    <el-row :gutter="500">
      <Input/>
    </el-row>
    <el-button>Dodaj</el-button>
  </div>
</template>

<script>
import {Component, Vue} from 'vue-property-decorator';
import Input from '../../components/input/Input';

@Component({
  components: {
    Input,
  },
})
export default class NewRestaurant extends Vue {
}
</script>
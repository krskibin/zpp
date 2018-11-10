<template>
  <div>
    <h1>The page your looking for can't be found</h1>
    <h1 class="big">404</h1>
  </div>
</template>

<script lang="ts">
import {Vue} from 'vue-property-decorator';


export default class NotFound extends Vue {}
</script>
<style scoped>
  .big {
    font-size: 200px;
  }
</style>
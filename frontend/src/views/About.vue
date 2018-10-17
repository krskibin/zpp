<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h4>Hello from backend:</h4>
    {{ tests }}
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';


@Component
export default class About extends Vue {
  @Action('getTests') getTests;
  @Getter('getTestObjects') tests;

  created() {
    this.getTests();
  }
}
</script>
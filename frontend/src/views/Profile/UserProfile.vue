<template>
  <div>
    <h1>Profile</h1>
    {{userInfo}}
  </div>
</template>

<script lang="ts">
import {Vue} from 'vue-property-decorator';
import {Getter, Action} from 'vuex-class';

export default class UserProfile extends Vue {
  name = 'user-profile';
  @Getter('getUserInfo') getUserInfo: any;

  get userInfo(): any {
    debugger
    return this.$store.state.auth
  }
}
</script>

<style lang="scss">
</style>

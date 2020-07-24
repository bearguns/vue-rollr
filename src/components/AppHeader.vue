<template>
  <div id="app-header">
    <AppLogo />
  </div>
</template>

<script>
import AppLogo from './AppLogo.vue'
export default {
  name: 'AppHeader',
  components: { AppLogo }
}
</script>

<style lang="scss">
#app-header {
    width: 100%;
    border-bottom: 2px solid $green;
}
</style>

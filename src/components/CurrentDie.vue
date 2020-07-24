<template>
  <div class="current-die">
    <h1 class="current-die__title">
      Rolling a {{selectedDie}} +
    </h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CurrentDie',
  computed: {
    ...mapState(['selectedDie', 'dieMod'])
  }
}
</script>

<style lang="scss">
.current-die {
    width: 24vw;
    & h1 {
        color: $green;
    }
}
</style>

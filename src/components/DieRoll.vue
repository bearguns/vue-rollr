<template>
  <div class="die-roll">
    <h2>{{lastRoll}}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'DieRoll',
  computed: {
    ...mapState(['lastRoll'])
  }
}
</script>

<style></style>

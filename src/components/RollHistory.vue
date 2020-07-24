<template>
  <div class="roll-history">
    <LastRoll />
    <RollList />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LastRoll from './LastRoll.vue'
import RollList from './RollList.vue'
export default {
  name: 'RollHistory',
  components: { LastRoll, RollList },
  computed: {
    ...mapState(['lastRoll', 'dieRolls'])
  }
}
</script>

<style lang="scss">
.roll-history {
    width: 100%;
    display: flex;
    padding: 1.2vh 1.5vw;
    justify-content: space-around;
}
</style>

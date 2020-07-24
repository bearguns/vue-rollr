<template>
  <div class="dice-roller">
    <CurrentDie />
    <DieModifier />
    <DiceRollerButton />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CurrentDie from './CurrentDie.vue'
import DieModifier from './DieModifier.vue'
import DiceRollerButton from './DiceRollerButton.vue'
export default {
  name: 'DiceRoller',
  components: { DiceRollerButton, CurrentDie, DieModifier },
  methods: {
    ...mapActions(['roll']),
    rollDice () {
      this.roll()
    }
  }
}
</script>

<style lang="scss">
.dice-roller {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 27px;
    border-bottom: 2px solid $blue;
}
</style>

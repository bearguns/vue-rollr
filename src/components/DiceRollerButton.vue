<template>
  <button class="button" @click="rollDice">Roll!</button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'DiceRollerButton',
  methods: {
    ...mapActions(['rollDice'])
  }
}
</script>

<style lang="scss" scoped>
.button {
    width: 12vw;
    height: 6vw;
    background-color: $red;
    color: $foreground;
    border: none;
    border-radius: 4px;
    flex-grow: 1;
    margin-left: 2vw;
    &:hover {
        background-color: $dark-red;
    }
}
</style>

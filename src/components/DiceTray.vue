<template>
  <div class="dice-tray">
    <Dice v-for="d in dice" :die="d" :key="d"/>
  </div>
</template>

<script>
import Dice from './Dice.vue'
export default {
  name: 'DiceTray',
  components: { Dice },
  data () {
    return {
      dice: ['d4', 'd6', 'd8', 'd10', 'd12', 'd20']
    }
  }
}
</script>

<style lang="scss">
.dice-tray {
    margin-top: 1.75rem;
    width: 100%;
    min-height: 220px;
    padding: 15px;
    border: 2px solid $green;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
</style>

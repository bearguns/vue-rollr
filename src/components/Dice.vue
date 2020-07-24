<template>
  <div
    :class="{'dice--active': isActive }"
    class="dice"
    @click="selectDie"
  >
    <div class="dice__icon">
      <DiceIcon :die="die" />
    </div>
    <p class="dice__label">
      {{ die }}
    </p>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import DiceIcon from './DiceIcon.vue'
export default {
  name: 'Dice',
  components: { DiceIcon },
  props: {
    die: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapMutations(['setSelectedDie']),
    selectDie () {
      this.setSelectedDie(this.die)
    }
  },
  computed: {
    ...mapState(['selectedDie']),
    isActive () {
      return this.die === this.selectedDie
    }
  }
}
</script>

<style lang="scss">
.dice {
    width: 24vw;
    font-size: 4.25rem;
    color: $purple;
    text-align: center;
    cursor: pointer;
    &--active {
        border-bottom: 4px solid $green;
    }
    &__label {
        font-size: $font-size-5;
    }
}
</style>

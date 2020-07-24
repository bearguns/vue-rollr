<template>
  <div class="die-modifier">
    <input
      class="die-modifier__input"
      min="0"
      name=""
      type="number"
      v-model="modifier"
      placeholder="2" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'DieModifier',
  computed: {
    ...mapState(['dieMod']),
    modifier: {
      get () {
        return this.dieMod
      },
      set (value) {
        this.setDieMod(Number(value))
      }
    }
  },
  methods: {
    ...mapMutations(['setDieMod'])
  }
}
</script>

<style lang="scss">
.die-modifier {
    max-height: 8vh;
    padding-left: 1.5rem;
    &__input {
        font-size: $font-size-2;
        padding-left: .5vw;
        width: 8vw;
        height: 6vh;
        color: $blue;
        background-color: $background;
        border: 1px solid $green;
        border-radius: 4px;
    }
}
</style>

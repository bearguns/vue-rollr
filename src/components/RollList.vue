<template>
  <ul class="roll-list">
    <li class="roll-list__item" v-for="(roll, i) in dieRolls" :key="i">{{roll}}</li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'RollList',
  computed: {
    ...mapState(['dieRolls'])
  },
  watch: {
    dieRolls () {
      const list = document.querySelector('.roll-list')
      list.scrollTo(0, list.scrollHeight)
    }
  }
}
</script>

<style lang="scss">
.roll-list {
    padding: 0 2rem;
    border: 1px solid $green;
    border-radius: 4px;
    overflow-y: scroll;
    flex-grow: 1;
    margin-left: 4vw;
    height: 22vh;
    &__item {
        color: $green;
        font-family: $font-family-title;
        font-size: $font-size-4;
    }
}
</style>

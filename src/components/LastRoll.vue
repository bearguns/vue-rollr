<template>
  <div class="last-roll">
    <h4 class="last-roll__title">You rolled:</h4>
    <p class="last-roll__roll">{{lastRoll}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'LastRoll',
  computed: {
    ...mapState(['lastRoll'])
  }
}
</script>

<style lang="scss">
.last-roll {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    &__title {
        color: $purple;
        margin-bottom: 0;
    }
    &__roll {
        font-size: 6rem;
        color: $red;
        margin: 0 auto;
        text-align: center;
    }
}
</style>

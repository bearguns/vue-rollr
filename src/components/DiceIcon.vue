<template>
  <div class="dice-icon">
    <fa-icon :icon="icon"></fa-icon>
  </div>
</template>

<script>
export default {
  name: 'DiceIcon',
  props: {
    die: {
      type: String,
      required: true
    }
  },
  computed: {
    icon () {
      return ['fal', `dice-${this.die}`]
    }
  }
}
</script>

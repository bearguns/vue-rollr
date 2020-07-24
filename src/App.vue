<template>
  <div id="app">
    <AppHeader />
    <DiceTray />
    <DiceRoller />
    <RollHistory />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import DiceTray from './components/DiceTray.vue'
import DiceRoller from './components/DiceRoller.vue'
import RollHistory from './components/RollHistory.vue'
export default {
  name: 'App',
  components: { AppHeader, DiceTray, DiceRoller, RollHistory }
}
</script>

<style lang="scss">
#app {
    padding: 15px 27px;
    margin: 0 auto;
    width: 75vw;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    h2 {
        color: $purple;
    }
}
</style>

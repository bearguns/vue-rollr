<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
 }
</style>

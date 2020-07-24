<template>
    <div class="app-logo">
        <h1 class="app-logo__title">
            <fa-icon :icon="['fal', 'dice-d20']"></fa-icon>
            Rollr
        </h1>
    </div>
</template>

<script>
export default {
  name: 'AppLogo'
}
</script>

<style lang="scss">
.app-logo {
    &__title {
        color: $green;
    }
}
</style>

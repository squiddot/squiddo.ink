<template>
  <div class="tv-screen">
    <h1>TV Screen Component</h1>
    <slot>
      <MenuChannel></MenuChannel>
      <IndexChannel></IndexChannel>
    </slot>
  </div>
</template>

<script>
import MenuChannel from './MenuChannel.vue'
import IndexChannel from './IndexChannel.vue'


export default {
  components: {
    MenuChannel,
    IndexChannel
  }
}
</script>

<style lang="scss">
.tv-screen {
  outline: 1px solid blue;
  }
</style>

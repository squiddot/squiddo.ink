<template>
  <div class="tv-screen">
    <h1>TV Screen Component</h1>
    <slot>
      <MenuChannel></MenuChannel>
      <IndexChannel></IndexChannel>
      <PortfolioChannel></PortfolioChannel>
      <ResumeChannel></ResumeChannel>
    </slot>
  </div>
</template>

<script>
import MenuChannel from './MenuChannel.vue'
import IndexChannel from './IndexChannel.vue'
import PortfolioChannel from './PortfolioChannel.vue'
import ResumeChannel from './ResumeChannel.vue'


export default {
  components: {
    MenuChannel,
    IndexChannel,
    PortfolioChannel,
    ResumeChannel
  }
}
</script>

<style lang="scss">
.tv-screen {
  outline: 1px solid blue;
  }
</style>

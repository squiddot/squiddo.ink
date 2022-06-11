<template>
  <div class="tv">
    <main ref="main" class="scanlines">
      <div class="screen">
        <div class="overlay">
          <slot>
<!--            <PortfolioChannel></PortfolioChannel>-->
                  <ResumeChannel></ResumeChannel>
            <!--      <IndexChannel></IndexChannel>-->
            <!--      <MenuChannel></MenuChannel>-->

          </slot>
        </div>
      </div>
    </main>
  </div>


</template>

<script>
// import MenuChannel from './MenuChannel.vue'
// import IndexChannel from './IndexChannel.vue'
// import PortfolioChannel from './PortfolioChannel.vue'
import ResumeChannel from './ResumeChannel.vue'


export default {
  components: {
    // MenuChannel,
    // IndexChannel,
    // PortfolioChannel,
    ResumeChannel
  }
}
</script>

<style lang="scss" scoped>
$secondary: #1b2838;
$screen-background: #121010;
@mixin pseudo {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  content: " ";
  }
@mixin center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  }
@mixin flexCenter {
  display: flex;
  align-items: center;
  justify-content: center;
  }
.tv {
  padding: 1.5vh 1.5vw;
  }
body{
  background: $secondary none repeat scroll 0 0;
  margin: 0;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  }
// background when TV is off
.screen:before {
  background: transparent;
  //linear-gradient(to bottom, #85908c 0%, #323431 100%)
  //repeat
  //scroll
  //0
  //0;
  content: "";
  @include center;
  width: 100%;
  height: 100%;
  z-index: -1;
  }
// CRT scanlines
.scanlines .overlay {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  @include flexCenter;
  &:after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/86186/crt.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    content: "";
    }
  &:before {
    @include pseudo;
    background: linear-gradient(
            transparentize($screen-background, 1) 50%,
            transparentize(darken($screen-background, 10), 0.75) 50%
    ),
    linear-gradient(
            90deg,
            transparentize(#ff0000, 0.94),
            transparentize(#00ff00, 0.98),
            transparentize(#0000ff, 0.94)
    );
    z-index: 2;
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
    }
  }
.picture {
  height: 100vh;
  overflow: hidden;
  width: 100vw;
  z-index: -1;
  transform: scale(0, 0);
  background: transparent
  linear-gradient(to bottom, #85908c 0%, #323431 100%)
  repeat
  scroll
  0
  0;
  }
</style>

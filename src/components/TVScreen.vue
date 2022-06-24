<template>
  <TVFrame></TVFrame>
  <div class="tv">
    <main ref="main" class="scanlines">
      <div class="screen">
        <div class="overlay">
          <!--          <div class="channel">-->
          <RouterView></RouterView>
          <!--          </div>-->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import TVFrame from "./TVFrame.vue";

export default {
  components: {
    TVFrame,
  },
};
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

body {
  overflow: hidden;
  margin: 0;
  background: $secondary none repeat scroll 0 0;
}

// background when TV is off
.screen:before {
  z-index: -1;
  width: 100%;
  height: 100%;
  @include center;
  content: "";
  background: transparent;
  background: linear-gradient(to bottom, #85908c 0%, #323431 100%) repeat scroll
    0 0;
}

// CRT scanlines
.scanlines .overlay {
  position: absolute;
  z-index: 1;
  top: 2%;
  left: 2%;
  width: 96%;
  height: 96%;
  @include flexCenter;
  pointer-events: none;

  &:after {
    //TODO: Take this out
    //display: none;
    position: absolute;
    z-index: 2;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    pointer-events: none;
    background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/86186/crt.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  &:before {
    @include pseudo;
    z-index: 2;
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
    background-size: 100% 2px, 3px 100%;
  }
}
</style>

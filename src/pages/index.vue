<template>
  <div ref="channel" class="channel">
    <canvas id="canvas" ref="canvas" class="picture"></canvas>
    <div class="channel-content">
      <h1>Index Channel</h1>
    </div>

    <!--    <h2>31 Years Alive. 29 of those spent banging on a keyboard.</h2>-->
    <!--    <p>-->
    <!--      I spent so much time on the internet, it was inevitable that I would-->
    <!--      eventually make it my career.-->
    <!--    </p>-->

    <!--    <p>Let me bring whimsy to your websites</p>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      frame: 0,
      windowWidth: 0,
    };
  },
  watch: {
    windowWidth(newWidth) {
      this.$refs.canvas.width = newWidth / 3;
      this.$refs.canvas.height = (newWidth * 0.5625) / 3;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.ctx = this.$refs.canvas.getContext("2d");
    this.animate();
    // for (let i = 0; i < 4; i++) {
    //   const span = this.$refs.text.firstElementChild.cloneNode(true);
    //   this.$refs.text.appendChild(span);
    // }
    setTimeout(() => {
      this.$refs["channel"].classList.add("on");
      this.$refs["channel"].classList.remove("off");
      this.animate();
    }, 1000);
  },
  methods: {
    animate() {
      // this.snow();
      this.frame = requestAnimationFrame(this.animate);
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
$delay: 2000ms;

@mixin flexCenter {
  display: flex;
  align-items: center;
  justify-content: center;
}
.channel-content {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  opacity: 0;
  z-index: 1;
  @include flexCenter;
}
.picture {
  height: 100vh;
  overflow: hidden;
  width: 100vw;
  z-index: -1;
  transform: scale(0, 0);
  background: transparent linear-gradient(to bottom, #85908c 0%, #323431 100%)
    repeat 0 0;
}
.on .picture {
  animation: 3000ms linear 0ms normal forwards 1 running on;
}
.on .channel-content {
  transition: opacity 10ms ease 2000ms;
  opacity: 1;
}
@keyframes on {
  0% {
    transform: scale(1, 0.8) translate3d(0, 0, 0);
    filter: brightness(4);
    opacity: 1;
  }
  3.5% {
    transform: scale(1, 0.8) translate3d(0, 100%, 0);
  }
  3.6% {
    transform: scale(1, 0.8) translate3d(0, -100%, 0);
    opacity: 1;
  }
  9% {
    transform: scale(1.3, 0.6) translate3d(0, 100%, 0);
    filter: brightness(4);
    opacity: 0;
  }
  11% {
    transform: scale(1, 1) translate3d(0, 0, 0);
    filter: contrast(0) brightness(0);
    opacity: 0;
  }
  100% {
    transform: scale(1, 1) translate3d(0, 0, 0);
    filter: contrast(1) brightness(1.2) saturate(1.3);
    opacity: 1;
  }
}
</style>

<template>
  <div class="frame">
    <nav class="wrapper">
      <TVButtons class="tv-buttons"></TVButtons>
    </nav>
  </div>
</template>

<script>
import TVButtons from "@/components/TVButtons";

export default {
  name: "TVFrame",
  components: {
    TVButtons,
  },
};
</script>

<style lang="scss" scoped>
.frame {
  position: fixed;
  display: none;
  z-index: 2;
  top: -5px;
  right: -5px;
  bottom: -5px;
  left: -5px;
  background-color: rebeccapurple;

  clip-path: polygon(
    0% 0%,
    0% 100%,
    3% 100%,
    3% 3%,
    97% 3%,
    97% 93%,
    3% 93%,
    3% 100%,
    100% 100%,
    100% 0%
  );
}
.wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>

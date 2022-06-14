<template>
  <div class="frame"></div>
</template>

<script>
export default {
  name: "TVFrame",
};
</script>

<style scoped lang="scss">
.frame {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rebeccapurple;
  z-index: 2;

  clip-path: polygon(
    0% 0%,
    0% 100%,
    3% 100%,
    3% 3%,
    97% 3%,
    97% 97%,
    3% 97%,
    3% 100%,
    100% 100%,
    100% 0%
  );
}
</style>

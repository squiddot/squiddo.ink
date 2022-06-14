<template>
  <div class="frame">
    <nav>
      <router-link to="/">Off</router-link>
      <router-link to="/on">On</router-link>
      <router-link to="/menu">Menu</router-link>
      <router-link to="/resume">Resume</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TVFrame",
};
</script>

<style lang="scss" scoped>
a {
  padding: 5px;
  color: white;
  outline: white 1px solid;
}

.frame {
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rebeccapurple;

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

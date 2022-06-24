<template>
  <div>
    <h1 class="vectro">
      <span class="vectro-body">TAYLOR</span><span class="vectro-red">VI</span
      ><span class="vectro-green">SI</span><span class="vectro-blue">ON</span>
    </h1>
    <div><h3>Available Now</h3></div>
  </div>
</template>

<script>
// if (navigator.platform.indexOf("Win") != -1) {
//   window.document.getElementById("wrapper").setAttribute("class", "windows");
// } else if (navigator.platform.indexOf("Mac") != -1) {
//   window.document.getElementById("wrapper").setAttribute("class", "mac");
// }
</script>

<style scoped>
h3 {
  color: white;
  text-align: center;
  font-size: 30px;
}
.vectro {
  position: relative;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 0.1px #f1f1f1;
  /*font-family: "Righteous", cursive;*/
  font-size: 160px;
  /*margin: 150px 0 50px 0;*/
}

.vectro:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /*-webkit-animation:vectro_effect 0.067s infinite;*/
  background: repeating-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.05) 0px,
    rgb(0, 0, 0) 1px,
    rgba(255, 255, 255, 0) 1px,
    rgba(255, 255, 255, 0) 2px
  );
}

.windows .vectro {
  -webkit-text-stroke: 4px #f1f1f1;
}

.vectro-body {
  -webkit-background-clip: text;
  background-image: -webkit-linear-gradient(
    #c3bfb4 0%,
    #fdfcfa 50%,
    #e8e7e5 51%,
    #757172 52%,
    #e8e9db 100%
  );
  -webkit-filter: drop-shadow(2px 2px 15px #3f59f4);
}

.vectro-red {
  color: #f10c20;
  -webkit-text-fill-color: #f10c20;
  -webkit-text-stroke: 0;
  -webkit-filter: drop-shadow(2px 2px 15px #f10c20);
  font-style: italic;
  padding-right: 20px;
}

.windows .vectro-red {
  padding-right: 30px;
}

.vectro-green {
  color: #6bff2b;
  -webkit-text-fill-color: #6bff2b;
  -webkit-filter: drop-shadow(2px 2px 15px #6bff2b);
  -webkit-text-stroke: 0;
  font-style: italic;
  padding-right: 20px;
  margin-left: -20px;
}

.windows .vectro-green {
  padding-right: 30px;
  margin-left: -30px;
}

.vectro-blue {
  color: #3f59f4;
  -webkit-text-fill-color: #3f59f4;
  -webkit-filter: drop-shadow(2px 2px 15px #3f59f4);
  -webkit-text-stroke: 0;
  font-style: italic;
  padding-right: 20px;
  margin-left: -20px;
}

.windows .vectro-blue {
  padding-right: 30px;
  margin-left: -30px;
}
</style>

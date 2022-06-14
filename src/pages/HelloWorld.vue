<template>
  <div class="container">
    <h1 class="glitch">squiddo.ink</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://fonts.googleapis.com/css?family=Nova+Round:100,300,400,500,700,900";
.container {
  height: 100vh;
  background: #1e283d;
  display: grid;
  place-items: center;
  font-size: 10px;
}
.container .glitch {
  color: #ffffff;
  font-size: 10em;
  position: relative;
  font-family: "Nova Round";
  font-weight: 700;
}
.container .glitch::before,
.container .glitch::after {
  content: "squiddo.ink";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background-color: #ffffff;
  color: #1e283d;
}
.container .glitch::before {
  left: 8px;
  text-shadow: 2px 0 #00ffea;
  animation: glitch 3s infinite linear;
}
.container .glitch::after {
  left: 8px;
  text-shadow: -2px 0 #fe3a7f;
  animation: glitch 2s infinite linear;
}
@-moz-keyframes glitch {
  0% {
    clip: rect(98px, 9999px, 44px, 0);
  }
  5% {
    clip: rect(45px, 9999px, 41px, 0);
  }
  10% {
    clip: rect(74px, 9999px, 83px, 0);
  }
  15% {
    clip: rect(57px, 9999px, 14px, 0);
  }
  20% {
    clip: rect(73px, 9999px, 15px, 0);
  }
  25% {
    clip: rect(72px, 9999px, 45px, 0);
  }
  30% {
    clip: rect(27px, 9999px, 52px, 0);
  }
  35% {
    clip: rect(23px, 9999px, 68px, 0);
  }
  40% {
    clip: rect(10px, 9999px, 97px, 0);
  }
  45% {
    clip: rect(43px, 9999px, 15px, 0);
  }
  50% {
    clip: rect(66px, 9999px, 89px, 0);
  }
  55% {
    clip: rect(51px, 9999px, 87px, 0);
  }
  60% {
    clip: rect(58px, 9999px, 13px, 0);
  }
  65% {
    clip: rect(99px, 9999px, 89px, 0);
  }
  70% {
    clip: rect(34px, 9999px, 23px, 0);
  }
  75% {
    clip: rect(84px, 9999px, 88px, 0);
  }
  80% {
    clip: rect(88px, 9999px, 83px, 0);
  }
  85% {
    clip: rect(69px, 9999px, 92px, 0);
  }
  90% {
    clip: rect(22px, 9999px, 43px, 0);
  }
  95% {
    clip: rect(20px, 9999px, 85px, 0);
  }
  100% {
    clip: rect(54px, 9999px, 79px, 0);
  }
}
@-webkit-keyframes glitch {
  0% {
    clip: rect(98px, 9999px, 44px, 0);
  }
  5% {
    clip: rect(45px, 9999px, 41px, 0);
  }
  10% {
    clip: rect(74px, 9999px, 83px, 0);
  }
  15% {
    clip: rect(57px, 9999px, 14px, 0);
  }
  20% {
    clip: rect(73px, 9999px, 15px, 0);
  }
  25% {
    clip: rect(72px, 9999px, 45px, 0);
  }
  30% {
    clip: rect(27px, 9999px, 52px, 0);
  }
  35% {
    clip: rect(23px, 9999px, 68px, 0);
  }
  40% {
    clip: rect(10px, 9999px, 97px, 0);
  }
  45% {
    clip: rect(43px, 9999px, 15px, 0);
  }
  50% {
    clip: rect(66px, 9999px, 89px, 0);
  }
  55% {
    clip: rect(51px, 9999px, 87px, 0);
  }
  60% {
    clip: rect(58px, 9999px, 13px, 0);
  }
  65% {
    clip: rect(99px, 9999px, 89px, 0);
  }
  70% {
    clip: rect(34px, 9999px, 23px, 0);
  }
  75% {
    clip: rect(84px, 9999px, 88px, 0);
  }
  80% {
    clip: rect(88px, 9999px, 83px, 0);
  }
  85% {
    clip: rect(69px, 9999px, 92px, 0);
  }
  90% {
    clip: rect(22px, 9999px, 43px, 0);
  }
  95% {
    clip: rect(20px, 9999px, 85px, 0);
  }
  100% {
    clip: rect(54px, 9999px, 79px, 0);
  }
}
@-o-keyframes glitch {
  0% {
    clip: rect(98px, 9999px, 44px, 0);
  }
  5% {
    clip: rect(45px, 9999px, 41px, 0);
  }
  10% {
    clip: rect(74px, 9999px, 83px, 0);
  }
  15% {
    clip: rect(57px, 9999px, 14px, 0);
  }
  20% {
    clip: rect(73px, 9999px, 15px, 0);
  }
  25% {
    clip: rect(72px, 9999px, 45px, 0);
  }
  30% {
    clip: rect(27px, 9999px, 52px, 0);
  }
  35% {
    clip: rect(23px, 9999px, 68px, 0);
  }
  40% {
    clip: rect(10px, 9999px, 97px, 0);
  }
  45% {
    clip: rect(43px, 9999px, 15px, 0);
  }
  50% {
    clip: rect(66px, 9999px, 89px, 0);
  }
  55% {
    clip: rect(51px, 9999px, 87px, 0);
  }
  60% {
    clip: rect(58px, 9999px, 13px, 0);
  }
  65% {
    clip: rect(99px, 9999px, 89px, 0);
  }
  70% {
    clip: rect(34px, 9999px, 23px, 0);
  }
  75% {
    clip: rect(84px, 9999px, 88px, 0);
  }
  80% {
    clip: rect(88px, 9999px, 83px, 0);
  }
  85% {
    clip: rect(69px, 9999px, 92px, 0);
  }
  90% {
    clip: rect(22px, 9999px, 43px, 0);
  }
  95% {
    clip: rect(20px, 9999px, 85px, 0);
  }
  100% {
    clip: rect(54px, 9999px, 79px, 0);
  }
}
@keyframes glitch {
  0% {
    clip: rect(98px, 9999px, 44px, 0);
  }
  5% {
    clip: rect(45px, 9999px, 41px, 0);
  }
  10% {
    clip: rect(74px, 9999px, 83px, 0);
  }
  15% {
    clip: rect(57px, 9999px, 14px, 0);
  }
  20% {
    clip: rect(73px, 9999px, 15px, 0);
  }
  25% {
    clip: rect(72px, 9999px, 45px, 0);
  }
  30% {
    clip: rect(27px, 9999px, 52px, 0);
  }
  35% {
    clip: rect(23px, 9999px, 68px, 0);
  }
  40% {
    clip: rect(10px, 9999px, 97px, 0);
  }
  45% {
    clip: rect(43px, 9999px, 15px, 0);
  }
  50% {
    clip: rect(66px, 9999px, 89px, 0);
  }
  55% {
    clip: rect(51px, 9999px, 87px, 0);
  }
  60% {
    clip: rect(58px, 9999px, 13px, 0);
  }
  65% {
    clip: rect(99px, 9999px, 89px, 0);
  }
  70% {
    clip: rect(34px, 9999px, 23px, 0);
  }
  75% {
    clip: rect(84px, 9999px, 88px, 0);
  }
  80% {
    clip: rect(88px, 9999px, 83px, 0);
  }
  85% {
    clip: rect(69px, 9999px, 92px, 0);
  }
  90% {
    clip: rect(22px, 9999px, 43px, 0);
  }
  95% {
    clip: rect(20px, 9999px, 85px, 0);
  }
  100% {
    clip: rect(54px, 9999px, 79px, 0);
  }
}
</style>

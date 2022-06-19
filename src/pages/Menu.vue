<template>
  <div class="channel">
    <canvas id="canvas" ref="canvas" class="picture"></canvas>
    <div class="overlay">
      <div ref="text" class="text">
        <span>AV-1</span>
      </div>
      <div class="menu">
        <header>Main Menu</header>
        <ul>
          <li class="active">
            <a href="https://www.linkedin.com/in/taylorcgaines/" title=""
              >LinkedIn</a
            >
          </li>
          <li><a href="" title="">Portfolio</a></li>
          <li><a href="" title="">Resume</a></li>
          <li><a href="https://github.com/squiddot" title="">Github</a></li>
          <li><a href="mailto:taylorcgaines@gmail.com" title="">Contact</a></li>
        </ul>
        <footer>
          <div class="key">Exit: <span>1</span></div>
          <div class="key">Select: <span>2</span></div>
        </footer>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

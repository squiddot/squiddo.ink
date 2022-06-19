<template>
  <div class="resume-wrapper">
    <!--    <h1>Resume Channel</h1>-->
    <!-- Built by Rachel Reveley https://rachelreveley.co.uk -->
    <div>
      <h1>Paused!</h1>
      <h2>Press Play to <i>Resume</i></h2>
    </div>
    <div>
      <article>
        <h2>Personal</h2>
        <div></div>
      </article>
      <article id="thr">
        <h2>Skills</h2>
        <div></div>
      </article>
      <article id="fri">
        <h2>Experience</h2>
        <div></div>
      </article>
      <article id="Sat">
        <h2>Education</h2>
        <div></div>
      </article>
      <article id="sun">
        <h2>Projects</h2>
        <div></div>
      </article>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  transition: all 0.3s ease 0s;
}

/* Background colours */

div + div article:nth-child(1) {
  background: #00fdfd;
}

div + div article:nth-child(2) {
  background: #00f93f;
}

div + div article:nth-child(3) {
  background: #ff43f9;
}

div + div article:nth-child(4) {
  background: #ff2121;
}

div + div article:nth-child(5),
div + div {
  background: #0039f8;
}

/* Main layout */

//html,
//body,
div + div {
  width: 97vw;
  height: 97vh;
}

div + div {
  position: relative;
  display: flex;
  overflow: hidden;
  align-items: stretch;
  flex-direction: row;
  flex-wrap: nowrap;
  list-style: none;
}

/* Articles */

div + div article {
  position: relative;
  flex: initial;
  box-sizing: border-box;
  width: 20%;
  height: 100%;
  padding: 2vh 1vw;
  text-align: center;
  vertical-align: bottom;
  text-decoration: none;
  color: #fff;
}

/* Big Headings */

.resume-wrapper {
  pointer-events: all;
}

.resume-wrapper > div:first-child {
  position: fixed;
  z-index: 1;
  bottom: 8vh;
  width: 100%;
  padding: 0.5rem;
  text-align: center;
  background: #fff;
}

body > div:first-child h1,
body > div:first-child h2 {
  margin: 0;
  padding: 0;
}

//div + div article {
//  pointer-events: all;
//  // NOTE: This is super important since the parent component has pointer-events set to none.
//}

/* Hover interaction */

div + div:hover article {
  flex: initial;
  width: 10%;
}

div + div article:hover {
  width: 60%;
  cursor: pointer;
}

article > div {
  transition: opacity 0.2s ease 0;
  opacity: 0;
}

div + div article:hover > div {
  transition: opacity 0.3s ease 0.3s;
  opacity: 1;
}

/* navigation */

div + div article > h2 {
  font-size: 3vh;
  position: absolute;
  bottom: 2vh;
  width: 100%;
  margin: 0;
  text-align: center;
}

/* Article layouts */

article div {
  width: 58vw;
  text-align: left;
}

article div p,
article div div h2,
article div h3 {
  margin: 0 0 1em 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  text-transform: uppercase;
}

article div p {
  width: 40vw;
}

@media (max-width: 900px) {
  div + div article {
    padding: 2vh 3vw;
  }
  div + div article > h2 {
    bottom: 23vh;
    min-width: 12em;
    transform: rotate(90deg);
    transform: rotate(-90deg);
    transform-origin: 0 0 0;
    text-align: left;
    opacity: 1;
  }
  div + div article:hover > h2 {
    opacity: 0;
  }
  article div p {
    width: 50vw;
  }
  article div {
    overflow-y: auto;
    max-height: calc(72%);
  }
}
</style>

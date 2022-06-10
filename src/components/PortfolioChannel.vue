<template>
  <div class="channel">
    <h1>I made these</h1>
    <div class="wrapper">
      <div class="card-container">
        <div class="card"><a href="https://ronzoni.com">
          <div class="card--display">
            <h2>Ronzoni</h2>
            <h2>Dev Lead, Team of 2</h2>
          </div>
          <div class="card--hover">
            <h2>Ronzoni.com 2021</h2>
            <p>Headless Craft CMS. Apollo GQL. Recipe and Product layout pages. Shared layout files and components. Vue.js. Nuxt.js. SCSS.</p>
            <p class="link">Click to visit site</p>
          </div>
        </a>
          <div class="card--border"></div>
        </div>
      </div>
      <div class="card-container">
        <div class="card card--dark"><a href="https://info.leaderboards.gg">
          <div class="card--display">
            <h2>LBGG Infosite</h2>
            <h2>Solo Dev</h2>
          </div>
          <div class="card--hover">
            <h2>leaderboards.gg 2022</h2>
            <p>Vue/Nuxt site. Scss. Landing site made for fully open source project I started, Leaderboards.gg</p>
            <p class="link">Click to visit site</p>
          </div>
        </a>
          <div class="card--border"></div>
        </div>
      </div>

      <div class="card-container">
        <div class="card"><a href="https://web.archive.org/web/20181230231519/https://www.circor.com/">
          <div class="card--display">
            <h2>CIRCOR</h2>
            <h2>Dev, Team of 2</h2>
          </div>
          <div class="card--hover">
            <h2>CIRCOR.com 2018</h2>
            <p>Algolia Search Engine, Internal Sales Partner Microsites, CraftCMS, map that filters down to sub categories, paginated News Feed. </p>
            <p class="link">Click to visit site</p>
          </div>
        </a>
          <div class="card--border"></div>
        </div>
      </div>
      <div class="card-container">
        <div class="card"><a href="https://smatechnologies.com/">
          <div class="card--display">
            <h2>SMA Technologies</h2>
            <h2>Dev, Team of 2</h2>
          </div>
          <div class="card--hover">
            <h2>smatechnologies.com 2020</h2>
            <p>Website made for SMA. Headless Craft CMS. Multi-language site with 4 languages.</p>
            <p class="link">Click to visit site</p>
          </div>
        </a>
          <div class="card--border"></div>
        </div>
      </div>
      <div class="card-container">
        <div class="card"><a href="https://pennebaker.com/">
          <div class="card--display">
            <h2>Pennebaker</h2>
            <h2>Dev, Team of 3</h2>
          </div>
          <div class="card--hover">
            <h2>Pennebaker.com 2019</h2>
            <p></p>
            <p class="link">Click to visit site</p>
          </div>
        </a>
          <div class="card--border"></div>
        </div>
      </div>
      <div class="card-container">
        <div class="card"><a href="https://nineenergyservice.com/">
          <div class="card--display">
            <h2>nine</h2>
            <h2>Dev Lead, Team of 3</h2>
          </div>
          <div class="card--hover">
            <h2>nineenergyservice.com 2019</h2>
            <p></p>
            <p class="link">Click to visit site</p>
          </div>
        </a>
          <div class="card--border"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.channel {
  outline: 1px solid magenta;
  }
$highlight: #5bc0eb;
$darkhighlight: #fde74c;

.wrapper {
  display: flex;
  flex-wrap: wrap;
  }
.card-container {
  flex: 300px;
  margin: 30px;

  .card {
    font-weight: bold;
    position: relative;
    width: 100%;

    a {
      padding: 30px;
      width: 100%;
      height: 400px;
      border: 2px solid black;
      background: white;
      text-decoration: none;
      color: black;
      display: block;
      transition: 0.25s ease;

      &:hover {
        transform: translate(-30px, -30px);
        border-color: $highlight;

        .card--display {
          display: none;
          }

        .card--hover {
          display: block;
          }
        }

      .card--display {
        i {
          font-size: 60px;
          margin-top: 200px;
          }

        h2 {
          margin: 20px 0 0;
          font-size: 20px;
          }
        }

      .card--hover {
        display: none;

        h2 {
          margin: 20px 0;
          font-size: 12px;
          }

        p {
          font-weight: normal;
          line-height: 1.5;
          font-size: 10px;

          &.link {
            margin: 20px 0 0;
            font-weight: bold;
            color: $highlight;
            }
          }
        }
      }

    .card--border {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      border: 2px dashed black;
      z-index: -1;
      }

    &.card--dark {
      a {
        color: white;
        background-color: black;
        border-color: black;

        .card--hover {
          .link {
            color: $darkhighlight;
            }
          }
        }
      }
    }
  }

</style>

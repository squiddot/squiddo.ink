<template>
  <nav>
    <ul>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#work">Work</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </nav>

  <main id="main" tabIndex="-1">
    <div class="container">
      <article id="about">
        <section class="container">
          <h6>beep boop</h6>
          <h2>Welcome to my website!</h2>
          <p>
            I'm a <strong>front end engineer</strong> who has about two decades
            of web browsing experience and 6 years of experience making websites
            myself.
          </p>
          <p>
            My current passion project is
            <a href="https://leaderboards.gg">leaderboards.gg</a>, a fully open
            source and community coded/owned/focused website(with public
            API/Database) for speedrun and score based competitive leaderboards.
          </p>
        </section>
        <section class="container">
          <h2>About Me</h2>
          <p>
            My name is Taylor, hindsight is 20/20, and I should have majored in
            Computer Science.
          </p>
          <p>
            Instead I tried majoring in Music, Management Information Systems,
            and then Business. And then I tried Pastry School.
          </p>
          <p>
            After working in the service industry for 6 years, I went to a (now
            closed) coding bootcamp called The Iron Yard Houston. It was 12
            weeks of at least 8 hour days relearning HTML, CSS, and Javascript
            that I hadn't touched in years.
          </p>
          <p>
            My first experience working with other developers was helping build
            tools with Sketch City (now part of
            <a href="https://houston.impacthub.net/">Impact Hub Houston</a>)
            after Hurricane Harvey. I built the text-message twilio intake side
            of
            <a href="https://github.com/sketch-city/harvey-p2p">harvey-p2p</a>,
            which gave people with immediate actionable needs (like diapers for
            kids, money for medications) an avenue to connect with resources
            that could help.
          </p>
          <p>
            Since then, I've been working at creative branding agencies,
            building and styling websites from scratch for corporate clients.
          </p>
          <p>
            Here are some of the technologies I've been working with recently:
          </p>
          <ul>
            <li>Javascript (ES6+)</li>
            <li>CraftCMS</li>
            <li>Vue.js</li>
            <li>Nuxt.js</li>
            <li>Vite</li>
            <li>SCSS</li>
            <li>CSS Animations</li>
          </ul>
        </section>
      </article>
      <article id="experience">
        <section class="container">
          <h2>Work Experience</h2>
          Front End Developer (Remote) December 2021 – Present ELL Creative,
          Houston, TX Joined a team of 2 developers at a strategic marketing and
          creative agency to update their existing client sites. Worked through
          the full web development process, from design handoff to launch, while
          adhering to tight deadlines. Collaborated with animation designers to
          develop and implement impressive (to the user) CSS Animations that
          keep visitors on our client's pages longer and decrease bounce rate.
          Helped upper management completely redesign the internal processes of
          the web development team, including the addition of Webflow. Single
          handedly built websites from scratch to ship B2B web and mobile
          products that focused on consumers and usability. Front End Developer
          (Hybrid) October 2017 – November 2021 Pennebaker, Houston, TX
          Contracted to hire by a creative branding and marketing agency to work
          on their existing sites, and also to build new ones, including project
          architecting and setup. Trained designers and account management teams
          in our internal web development process which improved collaboration
          and communication. Championed the cause of improving the QA processes
          for the web team. Developed sites for large corporate clients, backed
          by CraftCMS, which allowed their marketing teams to painlessly update
          their sites for new marketing campaigns.
        </section>
      </article>
      <article id="work">
        <section class="container">
          <h2>Sites I built</h2>
          <div class="project">
            <div class="project-thumbnail"></div>
            <div class="project-details">
              <h3>Taylorvision</h3>
              <p>
                A personal website sandbox where I can experiment with
                animations. uses vue, gsap, scss.
              </p>
            </div>
          </div>
        </section>
        <section class="container">
          <h3>Steps to Contribute</h3>
        </section>
        <footer id="contact">
          <div class="container">
            <h3>Contact</h3>
          </div>
        </footer>
      </article>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.container {
  outline: 2px solid white;

  p {
    outline: 2px solid black;
  }
}
</style>

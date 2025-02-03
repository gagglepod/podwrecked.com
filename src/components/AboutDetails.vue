<template>
  <section class="about-details-block">
    <div class="container">
      <!-- about-detail #1 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">Danger Sold Separately</h2>
          <p class="about-detail__info">
            When a sinister coffee empire threatens society, a ragtag group of veterans
            fights back in a high-octane, satirical action-comedy brimming with dark humor
            and caffeine-fueled chaos. If proves that the strongest steel is forged in the
            fire of a dumpster!
          </p>
        </div>
      </article>

      <!-- about-detail #2 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">About Season 01</h2>
          <p class="about-detail__info">
            In Season 01: <em>GROUNDS FOR WAR</em>, the battle between the rogue baristas,
            led by Moose and Kittyhawk, and the corporate giant Bizzlebean intensifies as
            they fight for survival, revenge, and the secret recipe for the “Four
            Horsemen” blend. After their coffee shop is destroyed in a bomb attack, the
            team embarks on a series of high-risk missions, including infiltrating
            Bizzlebean’s labs, rescuing allies, and uncovering the company’s sinister
            plans.
          </p>
          <p class="about-detail__info">
            Along the way, they face betrayals, strange conspiracies, and increasingly
            dangerous threats, from mind-controlled baristas to malfunctioning combat
            robots. They recruit new allies like Bermuda and Spoon, all while uncovering
            dark secrets about Bizzlebean's global ambitions. As the team grows stronger
            and more determined, they face off against increasingly ruthless enemies,
            including the unpredictable Brutus, whose war on the Joes escalates. Each
            mission brings them closer to discovering the truth behind Bizzlebean’s "Fifth
            Horseman" project, setting the stage for an epic showdown.
          </p>
          <p class="about-detail__info">
            Amidst the chaos, the absurdity of their situation reaches new heights,
            blending outrageous action with dark comedy as they continue their fight
            against the corporate behemoth. With danger around every corner, the stakes
            are higher than ever, and the Joes must push forward, no matter the cost.
          </p>
        </div>
      </article>

      <!-- about-detail #3 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">About the Production</h2>
          <p class="about-detail__info">
            Danger Sold Separately is a a comedy audio drama podcast, written and directed
            by Kyle M. Bondo, and produced by Oncetold. Season 01 "GROUNDS FOR WAR" has 52
            chapters/episodes divided into 10 parts. Each part has 5 chapters/episodes
            with the last part containing 2 extra chapters in a two-part epilogue.
            chapters.
          </p>
        </div>
      </article>

      <!-- about-detail #4 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">Reach Out</h2>
          <p class="about-detail__info">
            Each episode of Danger Sold Separately was produced by Oncetold in Fort Worth,
            Texas, and are always interested in what you liked about the show. If you have
            constructive feedback, ideas for future episodes, or just want to tell us how
            we did, please
            <a href="mailto:oncetold.cloud@gmail.com" target="_blank">drop us a line!</a>
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
/* *********************************************** */
/* Features */

.about-detail-block {
  border-top: 2px solid var(--color-light);
  background: var(--color-dino-ride);
  padding: 5rem 0 5rem;
  /* border: 2px solid red; */
}

.about-detail {
  margin: 8rem;
}

.about-detail__heading {
  margin: 1rem 0;
}

.about-detail__info {
  font-size: 2.1rem;
  line-height: 3.2rem;
}

.about-detail a {
  color: var(--color-headings);
  transition: color 0.3s;
  text-decoration: underline;
}

.about-detail a:hover {
  color: var(--color-placeholder);
  text-decoration: none;
}

.about-qr-code {
  height: 120px;
  margin: 0;
}

@media screen and (min-width: 768px) {
  .about-qr-code {
    height: 120px;
    margin: 0;
  }
}
</style>

<template>
  <section class="about-details-block">
    <div class="container">
      <!-- boost-detail #1 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">Step 1</h2>
          <p class="about-detail__info">
            First, you need a
            <a href="https://podcastindex.org/apps?appTypes=app" target="_blank"
              >modern podcast app</a
            >. Might I recommend
            <a href="https://podcastguru.io" target="_blank">PodcastGuru</a>,
            <a href="https://podverse.fm" target="_blank">Podverse</a>, or
            <a href="https://truefans.fm" target="_blank">TrueFans</a>? Those are my
            current favorites!
          </p>
        </div>
      </article>

      <!-- boost-detail #2 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">Step 2</h2>
          <p class="about-detail__info">
            Second, you subscribe to
            <a href="https://podcastindex.org/podcast/6933361" target="_blank"
              >Flowgnar</a
            >
            on that app or you go over to
            <a href="https://lnbeats.com" target="_blank">LN Beats</a> and see all the
            other music podcasts out there There's about 20 of us to choose from right
            now!
          </p>
        </div>
      </article>

      <!-- boost-detail #3 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">Step 3</h2>
          <p class="about-detail__info">
            Third, you use that modern podcast app to get yourself a
            <a href="https://truefans.fm" target="_blank">wallet</a>. This is where you
            turn your hard earn dollars into factions of a Bitcoin Called Satoshis -- or
            SATS!
          </p>
        </div>
      </article>

      <!-- boost-detail #4 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">Step 4</h2>
          <p class="about-detail__info">
            Fourth, once you got a few SATS You go back and play this podcast -- or any
            music podcast in your NEW, MODERN Podcast App. Then, when you hear me play a
            song that you love you Boost them some SATs, which is to say you use that app
            to send them some of your SATs, along with a short message directly to that
            artist. And I mean directly! They see it. They read it. And they LOVE IT!
            That's why it's called a BOOST!
          </p>
        </div>
      </article>

      <!-- boost-detail #5 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">Step 5</h2>
          <p class="about-detail__info">
            Finally, when you start boosting, make sure to tell them you heard it here on
            Flowgnar! You can even Boost me too when I'm jabbering away between tracks!
            Any time you feel like you got value you can give value back.
          </p>
        </div>
      </article>

      <!-- boost-detail #6 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">Bonus Step</h2>
          <p class="about-detail__info">
            The goal is to support these artists or to quote the Podfather himself, Adam
            Curry over at Boostagram Ball:
            <em>"I play the tracks while the artist get the SATS!"</em> I do get a little
            from each boost but that's for putting this all together.
          </p>

          <p class="about-detail__info">Now you know!</p>
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
</style>

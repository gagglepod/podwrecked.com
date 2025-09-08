<template>
  <section class="extras-detail-block">
    <div class="container">
      <!-- extras-detail #0 -->
      <article class="extras-detail">
        <div class="extras-detail__content">
          <h2 class="extras-detail__heading">Extras</h2>
          <p class="extras-detail__info">
            If you enjoy this podcast, please consider giving us a rating and review! We
            both thank you for taking the time to listen. You are appreciated!
          </p>
        </div>
      </article>

      <!-- extras-detail #1 -->
      <article class="extras-detail">
        <div class="extras-detail__content">
          <h2 class="extras-detail__heading">Trends</h2>
          <h3 class="extras-detail__subhead">What is going on in Big Podcasting?</h3>
          <p class="extras-detail__info">
            In every episode, Tim and Kyle talk about trends within the Podcast Industrial
            Complex (PIC). Then, at the end of each year, we go back through our list and
            see how we did. Most of these trends (i.e. predictions) happen to come true.
            However, to keep track of our success, we’ve compiled a list of all our
            predictions into a list for you to judge for yourself!
          </p>
        </div>
      </article>

      <!-- about-detail #2 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <picture class="splash-summary__image">
            <img
              src="../assets/images/podwrecked.com-v1-400x400.jpg"
              alt="Podwrecked Showart"
            />
          </picture>
          <h2 class="about-detail__heading">Old Show Art</h2>
          <p class="about-detail__info">
            Podwrecked’s original show art was based on a World War II-era poster by E.
            Oliver titled “Salvage saves Shipping”. Printed sometime between 1939 and
            1946, this poster art was modified to show the lifeboat captain carrying the
            microphone lantern, the ship flying the RSS flag, and the name “podcast”
            emblazoned across its stern. It was our show art from 2018-2022.
          </p>
        </div>
      </article>

      <!-- about-detail #3 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <picture class="splash-summary__image">
            <img
              src="../assets/images/podwrecked.com-v5-1400x1400.jpg"
              alt="Podwrecked Showart"
            />
          </picture>
          <h2 class="about-detail__heading">New Show Art</h2>
          <p class="about-detail__info">
            We have new show art for our 2023 relaunch! The new Podwrecked show art is a
            simplified homage to our original poster-based design. We kept the sinking
            ship, microphone lantern, and lifeboats. However, we simplified the color
            palette and added the iceberg to represent the real difficulty podcasters have
            with surviving their podcast. Adding Oncetold to our existing PODWRECKED
            typography was the final touch to let everyone know we have changed hosting
            companies to Oncetold.
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

.extras-detail-block {
  background: var(--color-dino-ride);
  padding: 0;
}

.extras-detail {
  margin: 8rem;
}

.extras-detail__heading {
  margin: 1rem 0;
}

.extras-detail__subhead {
  font-size: 3.5rem;
  font-weight: 400;
  color: var(--color-headings);
  letter-spacing: 0.1rem;
  margin-top: 0;
  padding: 0;
}

.extras-detail__info {
  font-size: 2.1rem;
  line-height: 3.2rem;
}

.extras-detail a {
  color: var(--color-headings);
  transition: color 0.3s;
  text-decoration: underline;
}

.extras-detail a:hover {
  color: var(--color-placeholder);
  text-decoration: none;
}
</style>

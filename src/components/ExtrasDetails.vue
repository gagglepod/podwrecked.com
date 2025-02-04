<template>
  <section class="extras-detail-block">
    <div class="container">
      <!-- extras-detail #0 -->
      <article class="extras-detail">
        <div class="extras-detail__content">
          <h2 class="extras-detail__heading">Extras</h2>
          <p class="extras-detail__info">Some of the experiments I've conducted:</p>
        </div>
      </article>

      <!-- extras-detail #1 -->
      <article class="extras-detail">
        <div class="extras-detail__content">
          <h2 class="extras-detail__heading">PAUSE for Dramatic Effect</h2>
          <h3 class="extras-detail__subhead">
            Not all nightmares happen when you sleep!
          </h3>
          <p class="extras-detail__info">
            Douglas Dire's world is one of isolation. Once a decorated Iraq War veteran,
            he now roams the streets haunted by the memory of friends lost in combat. With
            a fleeting grip on reality, a dark past full of unresolved pain, and a
            hopeless future, Douglas stumbles upon a ring in an empty parking lot that
            forces him to confront a secret he didn't know he was keeping.
          </p>

          <p class="extras-detail__info">
            Introducing Pause for Dramatic Effect, an audio drama podcast about a US
            Marine Corps veteran challenged by survivor's guilt, dark forces, and ancient
            magic.
          </p>

          <p class="extras-detail__info">
            <a href="https://pausefordramaticeffect.com/" target="_blank"
              >Listen to the Podcast</a
            >!
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

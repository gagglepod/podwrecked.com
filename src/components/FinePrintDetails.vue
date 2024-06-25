<template>
  <section class="fine-print-detail-block">
    <div class="container">
      <!-- fine-print-detail #1 -->
      <article class="fine-print-detail">
        <div class="fine-print-detail__content">
          <h3 class="fine-print-detail__heading">Value 4 Value Music Ownership</h3>
          <p class="fine-print-detail__info">
            Flowgnar is a
            <a href="https://oncetold.us/" target="_blank">Oncetold Music Experiment</a>
            created to support
            <a href="https://value4value.info/" target="_blank">Valueverse</a> music and
            was produced with the understanding that all songs are the property of their
            respective artists. Music is used for entertainment purposes only.
          </p>
        </div>
      </article>

      <!-- fine-print-detail #2 -->
      <article class="fine-print-detail">
        <div class="fine-print-detail__content">
          <h3 class="fine-print-detail__heading">V4V Split Percentages</h3>
          <p class="fine-print-detail__info">
            The Flowgnar Value Block is setup to send 90 percent of all boosts to the
            artist's value block while the song is playing. Flowgnar receives the
            remaining 10 percent to cover production and hosting costs.
          </p>
        </div>
      </article>

      <!-- fine-print-detail #3 -->
      <article class="fine-print-detail">
        <div class="fine-print-detail__content">
          <h3 class="fine-print-detail__heading">Segue Music</h3>
          <p class="fine-print-detail__info">
            Flowgnar segue music is
            <a
              href="https://www.pond5.com/royalty-free-music/item/245428917-vocal-energetic-garage-rock-instrumental"
              target="_blank"
              >Cinderella by Joel Loopez</a
            >
            licensed via <a href="https://Pond5.com" target="_blank">Pond5.com</a>.
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

.fine-print-detail-block {
  background: var(--color-dino-ride);
  padding: 0;
}

.fine-print-detail {
  margin: 8rem;
}

.fine-print-detail__heading {
  margin: 1rem 0;
}

.fine-print-detail__info {
  font-size: 2.1rem;
  line-height: 3.2rem;
}

.fine-print-detail a {
  color: var(--color-headings);
  transition: color 0.3s;
  text-decoration: underline;
}

.fine-print-detail a:hover {
  color: var(--color-placeholder);
  text-decoration: none;
}
</style>

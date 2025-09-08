<template>
  <section class="about-details-block">
    <div class="container">
      <!-- about-detail #1 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">About the Show</h2>
          <p class="about-detail__info">
            Greetings! Welcome to Podwrecked! The podcast that helps you Survive Your
            Show! Podwrecked is dedicated to helping you survive your podcast. We work
            through all the challenges that podcasters struggle with and find creative
            ways to move forward in your podcasting journey. Join your hosts Timothy Kimo
            Brien and Kyle Bondo as they navigate the uncharted dangers of podcasting and
            guide you to safer harbors. What you learn will save your podcast!
          </p>
        </div>
      </article>

      <!-- about-detail #2 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">About the Hosts</h2>
          <p class="about-detail__info">
            Kyle M. Bondo is the Chief Creative and Founder of
            <a href="https://oncetold.com" target="_blank">Oncetold</a>, a podcast
            education and technology company dedicated to simplifying the complicated
            world of podcasting. He loves "thinking bleep up" to solve problems and has
            been creating both audio and visual ideas for over 20 years in hopes of making
            a small dent in the podcast universe.
          </p>
          <p class="about-detail__info">
            Timothy Kimo Brien is the host of
            <a href="https://createartpodcast.com" target="_blank">Create Art Podcast</a>
            and brings over 30 years of experience in the arts and education to help you
            scratch that creative itch and encourage you to tame the inner critic and
            create more than you consume. Timothy has self-published 4 books of poetry and
            paints like a 4-year-old on crack. Always looking for new ways to exercise his
            creativity, he wishes the same for you.
          </p>
        </div>
      </article>

      <!-- about-detail #3 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">Support the Show</h2>
          <p class="about-detail__info">
            Every episode is a work of passion that requires a lot of coffee! We research,
            read, record, mix, edit, and produce every episode ourselves and always
            appreciate constructive feedback. If you get the chance, please send us a
            quick note of encouragement to us. This keeps us going when times get tough!
            This keeps me going when times get tough! And Thank you for taking the time to
            listen. You are appreciated!
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

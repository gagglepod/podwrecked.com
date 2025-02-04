<template>
  <section class="about-details-block">
    <div class="container">
      <!-- about-detail #1 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">About the Show</h2>
          <p class="about-detail__info">
            Podcasting starts with an idea: an idea that is not easily squished! However,
            long before their creators ever sit down at the microphone, a podcast idea
            needs to be hardened, tested and found worthy. This goes beyond just content
            creation and delivery. It requires real thought and structure to design a
            podcast that will survive long enough to find an audience. Follow your host
            Kyle M. Bondo as he takes fragile podcast ideas and transforms them into
            fierce audio concepts that are Not Easily Squished!
          </p>
        </div>
      </article>

      <!-- about-detail #2 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">About the Host</h2>
          <p class="about-detail__info">
            Kyle M. Bondo: Chief Creative and Founder of Oncetold, a podcast education and
            technology company dedicated to simplifying the complicated world of audio
            creation. He has been creating both audio and visual user experiences for over
            20 years in hopes of making a small dent in the podcast universe.
          </p>
        </div>
      </article>

      <!-- about-detail #3 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">Theme Music</h2>
          <p class="about-detail__info">
            What Are You Waiting For by NoiseWorld: A motivational rock song by Australian
            artist NoiseWorld, about getting pumped up and taking action. Its classic rock
            feel makes it fun and full of power, while the lyrics inspire the listener
            that maybe it's time to start a podcast!
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

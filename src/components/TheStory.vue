<template>
  <section class="about-details-block">
    <div class="container">
      <!-- about-details #0 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">Once upon a time</h2>
          <p class="about-detail__info">
            You lived a life. And with that life comes an endless number of stories. These
            are the stories we need to hear and the stories only you can tell.
          </p>
        </div>
      </article>

      <!-- about-details #0 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">Some stories were never told</h2>
          <p class="about-detail__info">
            What happens when you step off this mortal coil without ever telling another
            soul those stories? Those stories – your story – are gone. Forever.
          </p>
        </div>
      </article>

      <!-- about-details #0 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">What if stories could be saved?</h2>
          <p class="about-detail__info">
            What if you could preserve your stories for current and future generations?
            What if you could preserve your thoughts so that they could stand the test of
            time?
          </p>
        </div>
      </article>

      <!-- about-details #0 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">A better way to share</h2>
          <p class="about-detail__info">
            The oral tradition of storytelling is as old as mankind itself. The only
            difference now is how we share these stories. We’ve traded in the campfire for
            technology: the technology of podcasting.
          </p>
        </div>
      </article>

      <!-- about-details #0 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">Reaching through time</h2>
          <p class="about-detail__info">
            Podcasting is our oral tradition of storytelling for the modern world; where
            each episode becomes an epic, each season, an archive, and each show, a life
            that can reach through time.
          </p>
        </div>
      </article>

      <!-- about-details #0 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">The future of storytelling</h2>
          <p class="about-detail__info">
            It’s time for you to take advantage of podcasting – a time-tested technology –
            to now share your stories in a simple, clear, and enduring way.
          </p>
        </div>
      </article>

      <!-- about-details #0 -->
      <article class="about-detail">
        <div class="about-detail__content">
          <h2 class="about-detail__heading">It’s time to tell your story</h2>
          <p class="about-detail__info">
            Join your fellow yarn weavers, big dreamers, and true believers to preserve
            your experience, knowledge, and perspectives forever.
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
.bottom {
  display: flex;
  flex-direction: column;
  border-top: 2px solid var(--color-light);
}

.bottom__header {
  text-align: center;
  margin-bottom: 4rem;
}

.bottom__heading {
  margin-top: 0;
}

.bottom__link {
  color: var(--color-header);
}

.bottom__link:hover {
  color: var(--color-light);
  text-decoration: underline;
}

@media screen and (min-width: 768px) {
  .bottom {
    padding-top: 0;
  }

  .bottom__content {
    text-align: center;
    align-self: center;
    padding: 10rem 0 4rem 0;
  }

  .bottom__heading {
    padding: 0 10rem 0 10rem;
  }
}
</style>

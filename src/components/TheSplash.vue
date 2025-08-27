<template>
  <section class="splash-block splash-block--dark">
    <div class="container">
      <header class="splash-summary__header">
        <a href="https://podcastindex.org/podcast/6014487" target="_blank">
          <picture class="splash-summary__image">
            <img
              src="../assets/images/nes-v5-1400x1400.jpg"
              alt="Not Easily Squished Showart"
            />
          </picture>
        </a>
        <h2 class="splash-summary__heading">Not Easily Squished</h2>
        <h3 class="splash-summary__subhead">In Podcasting: It's Survive or Die!</h3>
        <p class="splash-summary__text">
          Why do podcasts fail? Because they are all built on easily squished concepts
          that lack vision, direction, and planning. If you want your podcast to survive,
          it demands real thought and structure that only comes with applying design
          principles that are proven to work. Go beyond content creation and delivery by
          following your host, Kyle M. Bondo, as he teaches you how you take your fragile
          podcast idea and transform it into fierce audio concept that is
          <em>Not Easily Squished!</em><br />Presented by
          <span class="splash-link"
            ><a href="https://oncetold.com" target="_blank">Oncetold</a></span
          >.
        </p>
      </header>
      <article class="splash-summary__article">
        <h3 class="splash-summary__subhead">
          Listen to Ep.01 - I am Not Easily Squished
        </h3>
        <audio
          class="splash-player"
          id="player"
          controls
          type="audio/mpeg"
          src="https://media.oncetold.net/80000018/20800032/nes001-i-am-not-easily-squished.mp3"
        >
          Your browser does not support the audio element.
        </audio>
        <h3 class="episode-details__follow">
          <a href="https://pod.link/1504157398" target="_blank">Pod.Link</a>&nbsp;
          <a href="https://podcastindex.org/podcast/6014487" target="_blank"
            >Podcast Index</a
          >&nbsp;
          <a
            href="https://music.amazon.com/podcasts/eb115cc0-4248-435f-88d7-842d9f34a4be/not-easily-squished"
            target="_blank"
            >Amazon</a
          >&nbsp;
          <a
            href="https://podcasts.apple.com/us/podcast/not-easily-squished/id1504157398"
            target="_blank"
            >Apple Podcasts</a
          >&nbsp;
        </h3>
      </article>
      <article class="splash-summary__article">
        <a href="https://pod.link/1504157398" target="_blank"
          ><button class="btn btn--dino-skin btn--stretched">
            Listen to the Show
          </button></a
        >
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheSplash",
  components: {},
  props: [],
  setup() {
    // const otVersion = import.meta.env.VITE_VERSION;

    // console.log("Current Date:", moment().toString());
    // console.log("Current year is:", moment().year());

    // let currentYear = moment().year();

    return {
      // otVersion,
      // currentYear,
    };
  },
};
</script>

<style>
.splash-block {
  padding: 2rem 0 1rem;
  /* border: 2px solid red; */
}

.splash-block--dark {
  background: var(--color-dino-ride);
  color: var(--color-headings);
}

.splash-block--dark h1,
.splash-block--dark h2,
.splash-block--dark h3 {
  color: var(--color-headings);
}

.splash-summary__image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.splash-summary__image > img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 2rem;
}

.splash-summary__header {
  text-align: center;
  margin-bottom: 5rem;
}

.splash-summary__article {
  text-align: center;
  margin-bottom: 5rem;
}

.splash-player {
  max-width: 30rem;
  /* margin: 1rem 4rem; */
}

.splash-link a {
  color: var(--color-headings);
  transition: color 0.3s;
  text-decoration: none;
}

.splash-link a:hover {
  color: var(--color-placeholder);
  text-decoration: underline;
}

#player {
  width: 100%;
}

.dashboard__brand {
  transform: translateY(5px);
}

.splash-logo-text {
  width: 600px;
  padding-bottom: 0.25rem;
}

.splash-logo--primary {
  fill: var(--color-headings);
}

.splash-summary__subhead {
  font-size: 3.5rem;
  font-weight: 400;
  text-align: center;
  color: var(--color-headings);
  letter-spacing: 0.1rem;
  margin-top: 0;
  padding: 0 1rem 0 1rem;
}

.splash-summary__text {
  text-align: center;
  color: var(--color-headings);
  letter-spacing: 0.1rem;
  margin-top: 1rem 0 1rem;
  padding: 0 1rem 0 1rem;
}

@media screen and (min-width: 768px) {
  .splash-summary__image > img {
    width: 600px;
    height: 600px;
    padding: 0;
    margin-top: 2rem;
    border-radius: 2rem;
  }

  .splash-summary__text {
    font-size: 2.1rem;
    line-height: 3.2rem;
    margin-top: 1rem 0 1rem;
    padding: 0 8rem 0 8rem;
  }

  .splash-player {
    max-width: 60rem;
    margin: 1rem 4rem;
  }
}
</style>

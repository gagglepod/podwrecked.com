<template>
  <section class="splash-block splash-block--dark">
    <div class="container">
      <header class="splash-summary__header">
        <a href="https://podcastindex.org/podcast/74900" target="_blank">
          <picture class="splash-summary__image">
            <img src="../assets/images/hero3.png" alt="Podwrecked Showart" />
          </picture>
        </a>
        <!-- <h2 class="splash-summary__heading">PODWRECKED</h2> -->
        <img
          class="splash-logo"
          src="../assets/images/podwrecked-title-100x714.png"
          alt="PODWRECKED Logo"
        />
        <h3 class="splash-summary__subhead">Survive Your Show!</h3>
        <p class="splash-summary__text">
          Podwrecked is dedicated to helping you survive your podcast. Join your hosts
          Timothy Kimo Brien and Kyle M. Bondo as they navigate the uncharted dangers of
          podcasting and guide you to safer harbors. What you learn will save your
          podcast! What you learn will save your podcast! Presented by
          <span class="splash-link"
            ><a href="https://oncetold.com" target="_blank">Oncetold</a></span
          >.
        </p>
      </header>
      <article class="splash-summary__article">
        <h3 class="splash-summary__subhead">Life is too short for bad podcasts!</h3>
        <p class="splash-summary__text">Listen to Our Trailer</p>
        <audio
          class="splash-player"
          id="player"
          controls
          type="audio/mpeg"
          src="https://op3.dev/e/media.oncetold.net/80000029/20800072/gagglepod-60sec-promo-trailer-06132019.mp3"
        >
          Your browser does not support the audio element.
        </audio>
        <h3 class="episode-details__follow">
          <a href="https://pod.link/1441480507" target="_blank">Pod.Link</a>&nbsp;
          <a href="https://podcastindex.org/podcast/74900" target="_blank"
            >Podcast Index</a
          >&nbsp; <a href="https://a.co/d/2htIH88" target="_blank">Amazon</a>&nbsp;
          <a href="https://open.spotify.com/show/6VeboWkLgVdNiHaBvTcK0e" target="_blank"
            >Spotify</a
          >&nbsp;
          <a
            href="https://podcasts.apple.com/us/podcast/podwrecked/id1441480507"
            target="_blank"
            >Apple Podcasts</a
          >&nbsp;
        </h3>
      </article>
      <article class="splash-summary__article">
        <a href="https://pod.link/1441480507" target="_blank"
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

.splash-logo {
  width: 500px;
  padding: 0.75rem 0 0.25rem 0;
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

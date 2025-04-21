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
        <h3 class="splash-summary__subhead">Podcasting starts with an idea...</h3>
        <p class="splash-summary__text">
          An idea that is not easily squished! However, long before their creators ever
          sit down at the microphone, a podcast idea needs to be hardened, tested and
          found worthy. This goes beyond just content creation and delivery. It requires
          real thought and structure to design a podcast that will survive long enough to
          find an audience. Follow your host Kyle M. Bondo as he takes fragile podcast
          ideas and transforms them into fierce audio concepts that are Not Easily
          Squished!
        </p>
        <a href="https://podcastindex.org/podcast/6014487" target="_blank"
          ><button class="btn btn--dino-skin btn--stretched">
            Listen to the Show
          </button></a
        >
      </header>
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

h2.splash-summary__heading {
  font-family: "Montserrat", sans-serif;
  color: #fff;
  margin: 1rem 0;
}

.splash-summary__heading a {
  color: var(--color-placeholder);
  transition: color 0.3s;
  text-decoration: none;
}

.splash-summary__heading a:hover {
  color: var(--color-secondary);
  text-decoration: underline;
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
}
</style>

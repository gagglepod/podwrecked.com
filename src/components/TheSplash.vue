<template>
  <section class="splash-block splash-block--dark">
    <div class="container">
      <header class="splash-summary__header">
        <a href="https://podcastindex.org/podcast/6933361" target="_blank">
          <picture class="splash-summary__image">
            <img
              src="../assets/images/danger-sold-separately-1400x1400.jpg"
              alt="Danger Sold Separately Showart"
            />
          </picture>
        </a>
        <h2>The strongest steel is forged in the fire of a dumpster!</h2>
        <p class="hero-summary__text">
          When a sinister coffee empire threatens society, a ragtag group of veterans
          fights back in a high-octane, satirical action-comedy brimming with dark humor
          and caffeine-fueled chaos.
        </p>
        <a
          href="https://lnbeats.com/album/2973941f-0d0e-5b33-8cee-a56647fb878d"
          target="_blank"
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
  name: "TheFooter",
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

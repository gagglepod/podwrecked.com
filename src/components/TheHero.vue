<template>
  <section class="hero-block block--hero">
    <div class="container">
      <header class="hero-block__header">
        <div class="hero__heading-img">
          <img class="hero-logo" src="../assets/images/t-rex-drawing-big-v2.svg" />
        </div>
        <a class="hero__brand" href="/"
          ><img
            class="hero-logo-text logo-primary"
            src="../assets/images/flowgnar-logo-text.svg"
            alt="Flowgnar Logo"
        /></a>
        <h2>Embrace the Flow, Chew the Gnar!</h2>
        <p class="hero-summary__text">
          Flowgnarl, hosted by Kyle M. Bondo, is a music podcast featuring Valueverse
          artists who grind the trail, flow over the drops, and climb the gnar. Each
          episode turns your off-road workout into a personal adventure by turning curated
          Value 4 Value playlists into pure endurance fuel.
        </p>
      </header>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.hero-block {
  display: flex;
  flex-direction: column;
  padding: 3rem 0 0 0;
}

.block--hero {
  background: var(--color-dino-sky);
  color: var(--color-headings);
}

.hero-block__header {
  text-align: center;
  margin: 2rem 0 0 0;
}

.block__heading {
  margin-top: 0;
}

p.hero__shortline {
  font-size: 2rem;
  color: var(--color-headings);
  letter-spacing: 1px;
  padding-top: 1rem;
}

.hero__heading-img {
  flex: 1;
  padding: 0;
}

.hero__brand {
  transform: translateY(5px);
}

.hero-logo {
  height: 120px;
  margin: 0;
}

.hero-logo-text {
  width: 300px;
  padding-bottom: 0.25rem;
}

.hero-summary__text {
  text-align: center;
  color: var(--color-headings);
  letter-spacing: 0.1rem;
  padding: 0 1rem 0 1rem;
}

@media screen and (min-width: 768px) {
  .hero-block {
    padding-top: 0;
  }

  .hero__heading {
    padding: 0 10rem 0 10rem;
  }

  .hero__shortline {
    padding: 0 10rem 0 10rem;
  }

  .hero-logo {
    height: 120px;
    margin: 0;
  }

  .hero-logo-text {
    width: 600px;
    padding-bottom: 0.25rem;
  }
}
</style>

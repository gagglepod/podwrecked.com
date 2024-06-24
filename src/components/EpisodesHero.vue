<template>
  <section class="episodes-block block--how">
    <div class="container">
      <header class="episodes-block__header">
        <div class="episode__heading-img">
          <img class="episodes-logo" src="../assets/images/t-rex-drawing-big-v2.svg" />
        </div>
        <a class="episode__brand" href="/"
          ><img
            class="episodes-logo-text logo-primary"
            src="../assets/images/flowgnar-episodes.svg"
            alt="Flowgnar Logo"
        /></a>
        <h2>Pure Endurance Fuel for Your Ears!</h2>
      </header>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.episodes-block {
  display: flex;
  flex-direction: column;
  padding: 3rem 0 5rem;
  /* border: 2px solid red; */
}

.block--how {
  background: var(--color-dino-sky);
  color: var(--color-headings);
}

.episodes-block__header {
  text-align: center;
  margin: 2rem 0 2rem;
}

.episode__heading {
  margin-top: 0;
}

.episode__shortline {
  font-size: 2rem;
  color: var(--color-headings);
  letter-spacing: 1px;
  margin-top: 1rem 0 1rem;
}

.episode__heading-img {
  flex: 1;
  padding: 0;
}

.episodes-logo {
  height: 120px;
  margin: 0;
}

.episode__brand {
  transform: translateY(5px);
}

.episodes-logo-text {
  width: 420px;
  padding-bottom: 0.25rem;
}

@media screen and (min-width: 768px) {
  .episodes-block {
    padding-top: 0;
  }

  .episode__heading {
    padding: 0 10rem 0 10rem;
  }

  .episode__shortline {
    padding: 2rem 10rem 0 10rem;
  }

  .episodes-logo {
    height: 120px;
    margin: 0;
  }

  .episodes-logo-text {
    height: 165px;
    padding-bottom: 0.25rem;
  }
}
</style>

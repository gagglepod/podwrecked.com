<template>
  <section class="boost-block block--boost">
    <div class="container">
      <header class="boost-block__header">
        <div class="boost__heading-img">
          <img class="boost-logo" src="../assets/images/t-rex-drawing-big-v2.svg" />
        </div>
        <a class="boost__brand" href="/"
          ><img
            class="boost-logo-text logo-primary"
            src="../assets/images/flowgnar-boosts.svg"
            alt="Flowgnar Logo"
        /></a>
        <h2>Boosting is Loving!</h2>
      </header>
    </div>
    <div class="sine-wave-container">
      <SineWaveHome />
    </div>
  </section>
</template>

<script>
import SineWaveHome from "../components/SineWaveHome.vue"; // Import SineWave component

export default {
  name: "BoostHero",
  components: {
    SineWaveHome,
  },
};
</script>

<style>
.boost-block {
  display: flex;
  flex-direction: column;
  /* padding: 3rem 0 5rem; */
  /* border: 2px solid red; */
}

.block--boost {
  background: var(--color-dino-sky);
  color: var(--color-headings);
}

.boost-block__header {
  text-align: center;
  margin: 2rem 0 2rem;
}

.boost__heading {
  margin-top: 0;
}

.boost__shortline {
  font-size: 2rem;
  color: var(--color-headings);
  letter-spacing: 1px;
  margin-top: 1rem 0 1rem;
}

.boost__heading-img {
  flex: 1;
  padding: 0;
}

.boost-logo {
  height: 120px;
  margin: 0;
}

.boost__brand {
  transform: translateY(5px);
}

.boost-logo-text {
  width: 300px;
  padding-bottom: 0.25rem;
}

@media screen and (min-width: 768px) {
  .boost-block {
    padding-top: 0;
  }

  .boost__heading {
    padding: 0 10rem 0 10rem;
  }

  .boost__shortline {
    padding: 2rem 10rem 0 10rem;
  }

  .boost-logo {
    height: 120px;
    margin: 0;
  }

  .boost-logo-text {
    height: 165px;
    padding-bottom: 0.25rem;
  }
}
</style>

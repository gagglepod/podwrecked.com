<template>
  <section class="about-block block--about">
    <div class="container">
      <header class="about-block__header">
        <div class="about__heading-img">
          <img class="about-logo" src="../assets/images/oncetold-logo-sm.svg" />
        </div>
        <h1 class="about__heading">We the Oncetold!</h1>
        <p class="about__shortline">
          We're a podcasting company proving that you don't have to be big to have a big
          impact. From creating our own podcasts, inventing better ways to produce a show,
          and giving influential talks at Podfest, to running a remote company that takes
          the friction out of publishing a podcast; we make waves and build great podcasts
          while we do it.
        </p>
      </header>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.about-block {
  display: flex;
  flex-direction: column;
  padding: 3rem 0 5rem;
  /* border: 2px solid red; */
}

.block--about {
  background: var(--color-primary-alt);
  color: var(--color-headings);
}

.about-block__header {
  text-align: center;
  margin: 2rem 0 2rem;
}

.about__heading {
  margin-top: 0;
}

.about__shortline {
  font-size: 2rem;
  color: var(--color-headings);
  letter-spacing: 1px;
  margin-top: 1rem 0 1rem;
}

.about__heading-img {
  flex: 1;
  padding: 0;
}

.about-logo {
  height: 64px;
  margin: 0;
}

@media screen and (min-width: 768px) {
  .about-block {
    padding-top: 0;
  }

  .about__heading {
    padding: 0 10rem 0 10rem;
  }

  .about__shortline {
    padding: 2rem 10rem 0 10rem;
  }

  .about-logo {
    height: 96px;
    margin: 0;
  }
}
</style>

<template>
  <section class="about-block block--about">
    <div class="container">
      <header class="about-block__header">
        <div class="about__heading-img">
          <img class="about-logo" src="../../assets/images/oncetold-logo-sm.svg" />
        </div>
        <h1 class="about__heading">Learn to Podcast</h1>
        <p class="about__shortline">
          <strong> Practical workshops </strong>for creating podcasts.
        </p>
        <p class="about__shortline">
          <strong>Get Inspired: </strong> Podcasting allows you to get all of your
          thoughts and ideas out of your head and into your listener's ears.
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

.about__shortline a {
  color: var(--color-headings);
  transition: color 0.3s;
  text-decoration: underline;
}

.about__shortline a:hover {
  color: var(--color-placeholder);
  text-decoration: none;
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

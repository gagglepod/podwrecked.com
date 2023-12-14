<template>
  <section class="hero-block block--hero">
    <div class="container">
      <header class="hero-block__header">
        <div class="hero__heading-img">
          <img class="hero-logo" src="../assets/images/oncetold-logo-sm.svg" />
        </div>
        <h1 class="hero__heading">The Simplified Toolkit for Building Podcasts.</h1>
        <p class="hero__shortline">
          <strong>Before Oncetold:</strong> Complicated hosting dashboards, forms scroll
          on into infinity, audio before design, it's tough to delegate, and hosts are
          stressed.
        </p>
        <p class="hero__shortline">
          <strong>After Oncetold:</strong> Every step is simply, you can plan your
          episodes first, design before audio, publishing is always clear, and a sense of
          calm sets in.
        </p>
        <a href="https://oncetold.cloud" target="_blank"
          ><button class="btn btn--secondary btn--stretched">Tell Your Story</button></a
        >
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
  padding: 3rem 0 1rem;
}

.block--hero {
  background: var(--color-primary-alt);
  color: var(--color-headings);
}

.hero-block__header {
  text-align: center;
  margin: 2rem 0 2rem;
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

.hero-logo {
  height: 64px;
  margin: 0;
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
    height: 96px;
    margin: 0;
  }
}
</style>

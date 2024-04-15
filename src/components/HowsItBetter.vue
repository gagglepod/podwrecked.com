<template>
  <section class="better-block better-block--dark">
    <div class="container">
      <header class="better-summary__header">
        <p class="better-summary__text">
          Oncetold takes the podcast hosting process and turns it into bite-sized steps.
          Each step focuses on a single concern, follows a clear flow, and never uses
          heavy forms or overloaded options.
        </p>
        <h2 class="better-summary__heading"><strong>Here's how it works:</strong></h2>
      </header>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.better-block {
  padding: 1rem 0 0;
  /* border: 2px solid red; */
}

.better-block--dark {
  background: var(--color-tertiary);
  color: var(--color-primary-alt);
}

.better-block--dark h1,
.better-block--dark h2,
.better-block--dark h3 {
  color: var(--color-headings);
}

.better-summary__header {
  text-align: center;
  margin-bottom: 5rem;
}

.better-summary__heading {
  margin: 4rem 0 0 0;
}

.better-summary__text {
  text-align: center;
  color: var(--color-headings);
  letter-spacing: 0.1rem;
  margin-top: 1rem 0 1rem;
  padding: 0 1rem 0 1rem;
}

@media screen and (min-width: 768px) {
  .better-summary__text {
    font-size: 2.1rem;
    line-height: 3.2rem;
    margin-top: 1rem 0 1rem;
    padding: 0 8rem 0 8rem;
  }
}
</style>

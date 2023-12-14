<template>
  <section class="better-block better-block--dark">
    <div class="container">
      <header class="better-summary__header">
        <p class="better-summary__text">
          <strong>How Oncetold is Unlike any Other Podcast Host:</strong> Unlink other
          complicated hosting dashboards with forms that scroll off into infinity,Oncetold
          makes every step simple by default. The flow is obvious, things are where you
          expect to find them, and the path to building an episode is clear.
        </p>
        <p class="better-summary__text"><strong>Here's how it works:</strong></p>
      </header>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.better-block {
  padding: 1rem 0 1rem;
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

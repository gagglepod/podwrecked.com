<template>
  <section class="dashboard-block dashboard-block--dark">
    <div class="container">
      <picture class="dashboard-summary__image">
        <source
          type="image/webp"
          srcset="
            ../assets/images/oncetold-dashboard.webp    1x,
            ../assets/images/oncetold-dashboard@2x.webp 2x
          "
        />
        <source
          type="image/png"
          srcset="
            ../assets/images/oncetold-dashboard.png    1x,
            ../assets/images/oncetold-dashboard@2x.png 2x
          "
        />
        <img src="../assets/images/oncetold-dashboard.png" alt="" />
      </picture>
    </div>
    <div class="container">
      <header class="dashboard-summary__header">
        <h2>Cool breeze, not a whirlwind.</h2>
        <p class="dashboard-summary__text">
          <strong>Podcast design is especially challenging when</strong> your show is
          spread out across multiple sticky notes, spreadsheets, and online documents.
          Things get lost, you have to complete your audio before you can even start your
          show notes, and episodes get released with the wrong information.
        </p>
        <p class="dashboard-summary__text">
          <strong>But when your podcast is allowed to breath in Oncetold,</strong> you can
          think about episodes in advance, delegate tasks, do everything in small steps,
          and release episodes to your audience without the rush (or the degree in
          engineering). You, as a team of one, or as part of a scrapy podcast studio, can
          use Oncetold to start an episode idea, not just release the finished version.
        </p>
        <button
          class="btn btn--secondary btn--stretched"
          @click="$router.push('/how-it-works')"
        >
          Take a Deeper Look
        </button>
      </header>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.dashboard-block {
  padding: 5rem 0 1rem;
  /* border: 2px solid red; */
}

.dashboard-block--dark {
  background: var(--color-tertiary);
  color: var(--color-primary-alt);
}

.dashboard-block--dark h1,
.dashboard-block--dark h2,
.dashboard-block--dark h3 {
  color: var(--color-headings);
}

.dashboard-summary__image > img {
  width: 100%;
}

.dashboard-summary__header {
  text-align: center;
  margin-bottom: 5rem;
}

.dashboard-summary__text {
  text-align: center;
  color: var(--color-headings);
  letter-spacing: 0.1rem;
  margin-top: 1rem 0 1rem;
  padding: 0 1rem 0 1rem;
}

@media screen and (min-width: 768px) {
  .dashboard-summary__image {
    justify-self: end;
  }

  .dashboard-summary__image > img {
    padding: 0rem;
    border-radius: 2rem;
  }

  .dashboard-summary__text {
    font-size: 2.1rem;
    line-height: 3.2rem;
    margin-top: 1rem 0 1rem;
    padding: 0 8rem 0 8rem;
  }
}
</style>

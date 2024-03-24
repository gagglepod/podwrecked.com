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
        <h2>For stories not easily squished.</h2>
        <p class="dashboard-summary__text">
          <strong>Stories are fragile </strong> and easily lost or forgotten if you don't
          save them. Details get lost, names fade away, and all you are left with is an
          outline of your experience.
        </p>

        <p class="dashboard-summary__text">
          <strong>But when your story is shared using Oncetold,</strong> you can capture
          it with a podcast, fill in the blanks, and share it with the world. Oncetold
          gives you that path in small steps that uses a process that is easy to follow
          without needing a degree in engineering.
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

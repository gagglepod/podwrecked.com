<template>
  <section class="terms-details-block">
    <div class="container">
      <!-- rights-detail #1 -->
      <article class="terms-detail">
        <div class="terms-detail__content">
          <h2 class="terms-detail__heading">All Systems are GO!</h2>
          <p class="terms-detail__info">Uptime over the past 90 days.</p>
          <ul>
            <li><a href="https://oncetold.cloud">Oncetold Cloud</a></li>
          </ul>
        </div>
      </article>

      <!-- rights-detail #1 -->
      <article class="terms-detail">
        <div class="terms-detail__content">
          <p class="terms-detail__info">Past Incidents</p>
          <ul>
            <li>MAR: <a href="https://oncetold.cloud">No incidents reported</a></li>
            <li>APR: <a href="https://oncetold.cloud">No incidents reported</a></li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "UptimeDetails",
};
</script>

<style>
/* *********************************************** */
/* Features */

.terms-detail-block {
  border-top: 2px solid var(--color-light);
  background: var(--color-primary);
  padding: 5rem 0 5rem;
  /* border: 2px solid red; */
}

.terms-detail {
  margin: 8rem;
}

.terms-detail__heading {
  margin: 1rem 0;
}

.terms-detail__info {
  font-size: 2.1rem;
  line-height: 3.2rem;
}

.terms-detail a {
  color: var(--color-headings);
  transition: color 0.3s;
  text-decoration: underline;
}

.terms-detail a:hover {
  color: var(--color-placeholder);
  text-decoration: none;
}
</style>

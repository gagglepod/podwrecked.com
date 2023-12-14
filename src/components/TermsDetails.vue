<template>
    <section class="terms-details-block">
      <div class="container">

      <!-- rights-detail #1 -->
      <article class="terms-detail">
        <div class="terms-detail__content">
          <h2 class="terms-detail__heading">Oncetold Policies, Terms, and Legal Stuff</h2>
          <p class="terms-detail__info">We try to make all our policies as clear, fair, and readable as possible.</p>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Privacy Regulations reference</a></li>
            <li><a href="#">Cancellation policy</a></li>
            <li><a href="#">Refund policy</a></li>
            <li><a href="#">Use Restrictions policy</a></li>
            <li><a href="#">Security overview</a></li>
            <li><a href="#">Taxes</a></li>
            <li><a href="#">Account ownership information for Oncetold</a></li>
            <li><a href="#">DCMA copyright takedown policy</a></li>
            <li><a href="#">Service Level Agreement (SLA) for Oncetold Business</a></li>
            <li><a href="#">How to manage a podcast account of someone who is incapacitated or has died</a></li>
          </ul>
        </div>
      </article>

      </div>
    </section>
</template>

<script>
export default {

}
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
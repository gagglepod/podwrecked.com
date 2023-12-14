<template>
  <section class="block block--hero hero">
    <div class="container grid grid--1x1">
      <header class="block__header hero__content">
        <div class="hero__heading-img">
          <img class="hero-logo" src="../assets/images/oncetold-logo-sm.svg" />
        </div>
        <h1 class="hero__heading">Find Your Audience</h1>
        <h2 class="hero__heading">
          Oncetold Hosting: ${{ accountPlanPrice }}/month flat on Day-1
        </h2>
        <p class="hero__shortline">
          If you are new to podcasting, Oncetold is the platform for you. Starts with
          every feature we offer and dedicated help for you and your podcast every step of
          the way.
        </p>
      </header>
    </div>
  </section>
</template>

<script>
export default {
  name: "PricingCards",
  setup() {
    const otSubscriptionPrice = import.meta.env.VITE_SUBSCRIPTION_PRICE;
    let accountPlanPrice = otSubscriptionPrice;

    return {
      accountPlanPrice,
    };
  },
};
</script>

<style>
/* *********************************************** */
/* Hero */

.hero {
  display: flex;
  flex-direction: column;
}

.hero__heading {
  margin-top: 0;
}

.hero__tagline {
  font-size: 2rem;
  color: var(--color-light);
  letter-spacing: 1px;
  margin-top: 1rem 0 1rem;
}

.hero__shortline {
  font-size: 2rem;
  color: var(--color-light);
  letter-spacing: 1px;
  margin-top: 1rem 0 1rem;
}

.hero__image {
  width: 100%;
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
  .hero {
    padding-top: 0;
  }

  .hero__heading {
    padding: 0 10rem 0 10rem;
  }

  .hero__shortline {
    padding: 0 10rem 0 10rem;
  }

  .hero__content {
    text-align: center;
    align-self: center;
    padding: 1rem 0 1rem 0;
  }

  .hero-logo {
    height: 96px;
    margin: 0;
  }
}
</style>

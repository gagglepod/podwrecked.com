<template>
  <section class="block container block-domain">
    <header class="block__header" data-aos="fade-up">
      <h2>Built by Storytellers, Not Engineers</h2>
      <p>
        We stiped out all the fluff in favor of steamlined features that break episode
        creation into bite-sized parts. All plans include Podcasting 2.0 namespace tools,
        access to all features from day one, and a free no-obligation
        {{ accountPlanTrial }}-day trial.
      </p>
    </header>
  </section>

  <section class="block plans-container block-plans">
    <div class="grid grid--1x1" data-aos="fade-up">
      <div>
        <!-- ONCETOLD APPRENTICE PLAN -->
        <div class="price-card price-card--tertiary">
          <header class="price-card__header">
            <h3 class="plan__name">Onctold</h3>
            <span class="plan__price">${{ accountPlanPrice }}</span>
            <span class="plan__biling-cycle">/per month</span>
            <!-- <span class="badge badge--secondary badge--small">Try for Free</span> -->
            <span class="plan__description"
              >Everything you need to create a podcast and tell your story.</span
            >
          </header>
          <div class="price-card__body">
            <span class="plan__description">Plan Details</span>
            <ul class="list list--tick">
              <li class="list__item">{{ accountPlanPodcasts }} x Podcast</li>
              <li class="list__item">{{ accountPlanTrial }}-Day Free Trial</li>
              <li class="list__item">Simplified User Experience</li>
              <li class="list__item">{{ accountPlanStorage }} Mb Storage/month</li>
              <li class="list__item">{{ accountPlanDownloads }} Downloads/month</li>
              <li class="list__item">Phone/Email Support</li>
              <li class="list__item">Podcast Training/Resources</li>
            </ul>
            <span class="plan__description">Show Building Features</span>
            <ul class="list list--tick">
              <li class="list__item">Show Builder</li>
              <li class="list__item">Episode Builder</li>
              <li class="list__item">Secure RSS Feed</li>
              <li class="list__item">Directory Link Builder</li>
              <li class="list__item">Download Statistics</li>
            </ul>
            <span class="plan__description">Podcasting 2.0 Namespace Features</span>
            <ul class="list list--tick">
              <li class="list__item">OP3 Statistics</li>
              <li class="list__item">Unique GUIDs</li>
              <li class="list__item">Chapters Builder</li>
              <li class="list__item">Transcripts On-Demand</li>
              <li class="list__item">Persons Builder</li>
              <li class="list__item">Funding</li>
              <li class="list__item">Lightning V4V Ready</li>
            </ul>
            <!-- <p class="plan__name">* Limits reset on the 1st of every month.</p> -->
            <a href="https://oncetold.cloud" target="_blank"
              ><button class="btn btn--secondary btn--block">
                Start Your Trial Today
              </button></a
            >
          </div>
        </div>
        <!-- END ONCETOLD APPRENTICE PLAN -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PricingCards",
  setup() {
    const otSubscriptionPrice = import.meta.env.VITE_SUBSCRIPTION_PRICE;

    let accountPlanPrice = otSubscriptionPrice;
    let accountPlanTrial = 14;
    let accountPlanPodcasts = 1;
    let accountPlanStorage = 200;
    let accountPlanDownloads = "20,000";

    return {
      otSubscriptionPrice,
      accountPlanPrice,
      accountPlanTrial,
      accountPlanPodcasts,
      accountPlanStorage,
      accountPlanDownloads,
    };
  },
};
</script>

<style>
/* *********************************************** */
/* Domain Block */

.plans-container {
  max-width: 600px;
  margin: 0 auto;
}

.block-domain .input-group {
  box-shadow: 0 0 30px 20px #e6ebee;
  border: 0;
  margin: 4rem auto;
  max-width: 670px;
}

.block-domain__prices {
  color: var(--color-headings);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 6rem);
  font-size: 2rem;
  font-weight: 600;
  justify-items: center;
  max-width: 700px;
  margin: 0 auto;
}

@media screen and (min-width: 768px) {
  .block-domain__prices {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }
}

/* *********************************************** */
/* Plans Block */

.block-plans .grid {
  gap: 8rem 4rem;
}

.block-plans .card {
  max-width: 600px;
  margin: 0 auto;
}

/* *********************************************** */
/* Pricing Cards */

.price-card {
  border-radius: 7px;
  box-shadow: 0 0 10px 5px var(--color-bottom);
  overflow: hidden;
}

.price-card__header,
.price-card__body {
  padding: 2rem 3rem;
}

.price-card--primary .price-card__header {
  background: var(--color-primary);
  color: #fff;
}

.price-card--secondary .price-card__header {
  background: var(--color-secondary);
  color: #fff;
}

.price-card--tertiary .price-card__header {
  background: var(--color-primary-alt);
  color: #fff;
}

.price-card--primary .badge--primary {
  background: var(--color-secondary);
  margin: 0.5rem;
}

.price-card--secondary .badge--secondary {
  background: var(--color-primary);
  margin: 0.5rem;
}

/* *********************************************** */
/* Plans */

.plan {
  transition: transform 0.2s ease-out;
}

.plan__name {
  color: #fff;
  margin: 0;
  font-weight: 500;
  font-size: 2.4rem;
}

.plan__price {
  font-size: 6rem;
}

.plan__billing-cycle {
  font-size: 2.4rem;
  font-weight: 300;
  opacity: 0.8;
  margin-right: 1rem;
}

.plan__description {
  font-size: 2.2rem;
  font-weight: 300;
  letter-spacing: 1px;
  display: block;
}

.plan .list__item {
  margin-bottom: 2rem;
}

.plan--popular .card__header {
  position: relative;
}

.plan--popular {
  transform: scale(1.1);
}

.plan--popular .card__header::before {
  content: url(../assets/images/popular.svg);
  width: 40px;
  display: inline-block;
  position: absolute;
  top: -6px;
  right: 5%;
}

.plan:hover {
  transform: scale(1.05);
}

.plan--popular:hover {
  transform: scale(1.15);
}

.plan__biling-cycle {
  font-size: 2.2rem;
}

@media screen and (min-width: 1024px) {
  .plan__name {
    font-size: 1.4rem;
  }

  .plan__price {
    font-size: 5rem;
  }

  .plan__billing-cycle {
    font-size: 1.6rem;
  }
}
</style>

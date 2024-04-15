<template>
  <section class="feature-block">
    <div class="container">
      <!-- Feature #1 -->
      <article class="feature-grid feature-grid--1x2 feature">
        <div class="feature__content">
          <h2 class="feature__heading">Plan first, record later</h2>
          <p class="feature__info">
            You don’t need to have your audio ready to start building an episode. Instead,
            Oncetold allows you to brainstorm ideas, delegate your episode staging, or
            plan out episodes in advance BEFORE you record.
          </p>
        </div>
        <picture>
          <source
            type="image/webp"
            srcset="
              ../assets/images/ot-episode.webp    1x,
              ../assets/images/ot-episode@2x.webp 2x
            "
          />
          <source
            type="image/jpg"
            srcset="
              ../assets/images/ot-episode.jpg    1x,
              ../assets/images/ot-episode@2x.jpg 2x
            "
          />
          <img
            class="feature__image"
            src="../assets/images/ot-episode@2x.jpg"
            alt="Start Your Episode Design, No Audio Required"
          />
        </picture>
      </article>

      <!-- Feature #2 -->
      <article class="feature-grid feature-grid--1x2 feature">
        <div class="feature__content" data-aos="fade-left">
          <h2 class="feature__heading">Build your library</h2>
          <p class="feature__info">
            Oncetold gives you all the tools to shape and share your episodes when you’re
            all finished with recording. Clear and simple steps, no guesswork, and a
            library that shows you what your audience sees and hears.
          </p>
        </div>
        <picture>
          <source
            type="image/webp"
            srcset="
              ../assets/images/ot-library.webp    1x,
              ../assets/images/ot-library@2x.webp 2x
            "
          />
          <source
            type="image/jpg"
            srcset="
              ../assets/images/ot-library.jpg    1x,
              ../assets/images/ot-library@2x.jpg 2x
            "
          />
          <img
            class="feature__image"
            src="../assets/images/ot-library@2x.jpg"
            alt="All Your Need to Build Your Library of Episodes"
          />
        </picture>
      </article>

      <!-- Feature #3 -->
      <article class="feature-grid feature-grid--1x2 feature">
        <div class="feature__content">
          <h2 class="feature__heading">An opinionated approach</h2>
          <p class="feature__info">
            Oncetold will not overwhelm you with nonsense. Instead, we provide you with an
            opinionated approach to podcasting by removing all the confusing jargon,
            engineering jibber-jabber, and heavy tech talk.
          </p>
        </div>
        <picture data-aos="zoom-in-left">
          <source
            type="image/webp"
            srcset="
              ../assets/images/ot-stats.webp    1x,
              ../assets/images/ot-stats@2x.webp 2x
            "
          />
          <source
            type="image/jpg"
            srcset="../assets/images/ot-stats.jpg 1x, ../assets/images/ot-stats@2x.jpg 2x"
          />
          <img
            class="feature__image"
            src="../assets/images/ot-stats@2x.jpg"
            alt="An Opinionated Approach to Podcasting"
          />
        </picture>
      </article>

      <!-- Feature #4 -->
      <article class="feature-grid feature-grid--1x2 feature">
        <div class="feature__content">
          <h2 class="feature__heading">Future-proof</h2>
          <p class="feature__info">
            We built Podcasting 2.0 features directly into Oncetold so that you can now
            give your audience a better listening experience when they’re using one of the
            latest modern listening apps.
          </p>
        </div>
        <picture data-aos="zoom-in-right">
          <source
            type="image/webp"
            srcset="
              ../assets/images/ot-features.webp    1x,
              ../assets/images/ot-features@2x.webp 2x
            "
          />
          <source
            type="image/jpg"
            srcset="
              ../assets/images/ot-features.jpg    1x,
              ../assets/images/ot-features@2x.jpg 2x
            "
          />
          <img
            class="feature__image"
            src="../assets/images/ot-features@2x.jpg"
            alt="The Future is Podcasting 2.0 Features"
          />
        </picture>
      </article>

      <!-- Feature #5 -->
      <article class="feature-grid feature-grid--1x2 feature">
        <div class="feature__content">
          <h2 class="feature__heading">No fluff</h2>
          <p class="feature__info">
            Oncetold was built by podcasters for podcasters who care about the story. We
            try to avoid the hype and focus only on features that help you reach your
            audience.
          </p>
        </div>
        <picture data-aos="zoom-in-left">
          <source
            type="image/webp"
            srcset="
              ../assets/images/ot-chapters.webp    1x,
              ../assets/images/ot-chapters@2x.webp 2x
            "
          />
          <source
            type="image/jpg"
            srcset="
              ../assets/images/ot-chapters.jpg    1x,
              ../assets/images/ot-chapters@2x.jpg 2x
            "
          />
          <img
            class="feature__image"
            src="../assets/images/ot-chapters@2x.jpg"
            alt="A User Experience Designed For Storytellers"
          />
        </picture>
      </article>

      <!-- Feature #6 -->
      <article class="feature-grid feature-grid--1x2 feature">
        <div class="feature__content">
          <h2 class="feature__heading">Always teaching</h2>
          <p class="feature__info">
            We know how tough starting a podcast can be. This is why Oncetold is about
            teaching you how to podcast first. The rest will follow.
          </p>
        </div>
        <picture data-aos="zoom-in-right">
          <source
            type="image/webp"
            srcset="
              ../assets/images/ot-value4value.webp    1x,
              ../assets/images/ot-value4value@2x.webp 2x
            "
          />
          <source
            type="image/jpg"
            srcset="
              ../assets/images/ot-value4value.jpg    1x,
              ../assets/images/ot-value4value@2x.jpg 2x
            "
          />
          <img
            class="feature__image"
            src="../assets/images/ot-value4value@2x.jpg"
            alt=""
          />
        </picture>
      </article>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
/* *********************************************** */
/* Features */

.feature-block {
  border-top: 2px solid var(--color-light);
  background: var(--color-tertiary);
  padding: 0 0 5rem 0;
  /* border: 2px solid red; */
}

.feature-block__header {
  text-align: center;
  margin-bottom: 4rem;
}

.feature-block__heading {
  margin-top: 0;
}

.feature {
  gap: 4rem 3rem;
  margin: 6rem 0 0;
  /* background: var(--color-primary) */
}

.feature:first-of-type {
  margin-top: 6rem;
}

.feature__heading {
  margin: 1rem 0;
  line-height: 5rem;
}

.feature__info {
  font-size: 2.1rem;
  line-height: 3.2rem;
}

.feature__image {
  width: 100%;
}

@media screen and (min-width: 768px) {
  .feature:nth-of-type(even) .feature__content {
    order: 2;
  }
}

.feature-grid {
  display: grid;
}

@media screen and (min-width: 768px) {
  .feature-grid--1x2 {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

<template>
  <section class="feature-block">
    <div class="container">
      <!-- Feature #1 -->
      <article class="feature-grid feature-grid--1x2 feature">
        <div class="feature__content">
          <h2 class="feature__heading">Prepare Your Episodes First</h2>
          <p class="feature__info">
            Oncetold allows you to create your podcast episode details BEFORE you ever
            record your audio. This can allow you to brainstorm in advance or have someone
            on your team create it for you.
          </p>
        </div>
        <picture>
          <source
            type="image/webp"
            srcset="../assets/images/prepare.webp 1x, ../assets/images/prepare@2x.webp 2x"
          />
          <source
            type="image/jpg"
            srcset="../assets/images/prepare.jpg 1x, ../assets/images/prepare@2x.jpg 2x"
          />
          <img class="feature__image" src="../assets/images/prepare@2x.jpg" alt="" />
        </picture>
      </article>

      <!-- Feature #2 -->
      <article class="feature-grid feature-grid--1x2 feature">
        <div class="feature__content" data-aos="fade-left">
          <h2 class="feature__heading">Publish When You Are Ready</h2>
          <p class="feature__info">
            With Prepared episodes you can plan ahead and add episode audio to your
            podcast now and the publish it later. This can give you the freedom to
            schedule your release dates or allow your team to release your episodes for
            you.
          </p>
        </div>
        <picture>
          <source
            type="image/webp"
            srcset="../assets/images/publish.webp 1x, ../assets/images/publish@2x.webp 2x"
          />
          <source
            type="image/jpg"
            srcset="../assets/images/publish.jpg 1x, ../assets/images/publish@2x.jpg 2x"
          />
          <img class="feature__image" src="../assets/images/publish@2x.jpg" alt="" />
        </picture>
      </article>

      <!-- Feature #3 -->
      <article class="feature-grid feature-grid--1x2 feature">
        <div class="feature__content">
          <h2 class="feature__heading">Less is More Feature Set</h2>
          <p class="feature__info">
            Oncetold was built by podcasters for podcasters. In the era of podcast media
            hosting companies going at it with feature wars, Oncetold stiped out all the
            fluff and shiny objects in favor of features that actually support your show.
          </p>
        </div>
        <picture data-aos="zoom-in-left">
          <source
            type="image/webp"
            srcset="
              ../assets/images/dashboard.webp    1x,
              ../assets/images/dashboard@2x.webp 2x
            "
          />
          <source
            type="image/jpg"
            srcset="
              ../assets/images/dashboard.jpg    1x,
              ../assets/images/dashboard@2x.jpg 2x
            "
          />
          <img class="feature__image" src="../assets/images/dashboard@2x.jpg" alt="" />
        </picture>
      </article>

      <!-- Feature #4 -->
      <article class="feature-grid feature-grid--1x2 feature">
        <div class="feature__content">
          <h2 class="feature__heading">24/7 Customer Support</h2>
          <p class="feature__info">
            Podcast publishing is still tough. That's why Oncetold is all about good
            customer service. We don't push you cold, lifeless bots or forward you to a
            generic call center. We have real people ready to solve your problems when
            they happen.
          </p>
        </div>
        <picture data-aos="zoom-in-right">
          <source
            type="image/webp"
            srcset="../assets/images/help.webp 1x, ../assets/images/help@2x.webp 2x"
          />
          <source
            type="image/jpg"
            srcset="../assets/images/help.jpg 1x, ../assets/images/help@2x.jpg 2x"
          />
          <img class="feature__image" src="../assets/images/help@2x.jpg" alt="" />
        </picture>
      </article>

      <!-- Feature #5 -->
      <article class="feature-grid feature-grid--1x2 feature">
        <div class="feature__content">
          <h2 class="feature__heading">Less is More Feature Set</h2>
          <p class="feature__info">
            Oncetold was built by podcasters for podcasters. In the era of podcast media
            hosting companies going at it with feature wars, Oncetold stiped out all the
            fluff and shiny objects in favor of features that actually support your show.
          </p>
        </div>
        <picture data-aos="zoom-in-left">
          <source
            type="image/webp"
            srcset="
              ../assets/images/dashboard.webp    1x,
              ../assets/images/dashboard@2x.webp 2x
            "
          />
          <source
            type="image/jpg"
            srcset="
              ../assets/images/dashboard.jpg    1x,
              ../assets/images/dashboard@2x.jpg 2x
            "
          />
          <img class="feature__image" src="../assets/images/dashboard@2x.jpg" alt="" />
        </picture>
      </article>

      <!-- Feature #6 -->
      <article class="feature-grid feature-grid--1x2 feature">
        <div class="feature__content">
          <h2 class="feature__heading">24/7 Customer Support</h2>
          <p class="feature__info">
            Podcast publishing is still tough. That's why Oncetold is all about good
            customer service. We don't push you cold, lifeless bots or forward you to a
            generic call center. We have real people ready to solve your problems when
            they happen.
          </p>
        </div>
        <picture data-aos="zoom-in-right">
          <source
            type="image/webp"
            srcset="../assets/images/help.webp 1x, ../assets/images/help@2x.webp 2x"
          />
          <source
            type="image/jpg"
            srcset="../assets/images/help.jpg 1x, ../assets/images/help@2x.jpg 2x"
          />
          <img class="feature__image" src="../assets/images/help@2x.jpg" alt="" />
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
  background: var(--color-primary-alt);
  padding: 5rem 0 5rem;
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

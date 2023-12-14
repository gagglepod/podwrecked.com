<template>
  <section class="showcase-block showcase-block--dark showcase">
    <div class="container showcase-grid showcase-grid--1x2">
      <picture class="showcase__image">
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
        <img src="../assets/images/oncetold-dashboard.png" alt="Oncetold Dashboard" />
      </picture>
      <ul class="list">
        <li>
          <div class="showcase-media">
            <div class="showcase-media__image">
              <svg class="icon icon--primary">
                <use href="../assets/images/sprite.svg#clock"></use>
              </svg>
            </div>
            <div class="showcase-media__body">
              <h3 class="showcase-media__title">Pace Yourself</h3>
              We built Oncetold to all you to create an episode in bite-sized steps. No
              long forms, no unexplained fields.
            </div>
          </div>
        </li>
        <li>
          <div class="showcase-media">
            <div class="showcase-media__image">
              <svg class="icon icon--primary">
                <use href="../assets/images/sprite.svg#growth"></use>
              </svg>
            </div>
            <div class="showcase-media__body">
              <h3 class="showcase-media__title">Give Your Audience More</h3>
              Oncetold fully embraces the Podcasting 2.0 Namespace and we look forward to
              showing you how each feature benefits your audience.
            </div>
          </div>
        </li>
        <li>
          <div class="showcase-media">
            <div class="showcase-media__image">
              <svg class="icon icon--primary">
                <use href="../assets/images/sprite.svg#easy"></use>
              </svg>
            </div>
            <div class="showcase-media__body">
              <h3 class="showcase-media__title">No Surprises</h3>
              Oncetold provides you all our features on day one.
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.showcase-block {
  padding: 5rem 0 1rem;
  /* border: 2px solid red; */
}

.showcase-block--dark {
  background: var(--color-tertiary);
  color: var(--color-primary-alt);
}

.showcase-block--dark h1,
.showcase-block--dark h2,
.showcase-block--dark h3 {
  color: var(--color-headings);
}

.showcase-grid {
  display: grid;
}

@media screen and (min-width: 768px) {
  .showcase-grid--1x2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

.showcase__image > img {
  width: 100%;
}

@media screen and (min-width: 768px) {
  .showcase .showcase-grid {
    grid-template-columns: 65% 35%;
  }

  .showcase__image {
    justify-self: end;
  }

  .showcase__image > img {
    width: auto;
    max-width: 700px;
    padding-right: 2rem;
  }
}

/* *********************************************** */
/* Media */

.showcase-media {
  display: flex;
  margin-bottom: 4rem;
}

.showcase-media__title {
  margin-top: 0;
}

.showcase-media__body {
  margin: 0 2rem;
  color: var(--color-headings);
}

.showcase-media__image {
  margin-top: 1rem;
}
</style>

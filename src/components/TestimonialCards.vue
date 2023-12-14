<template>
    <section class="block">
      <header class="block__header" data-aos="fade-up">
        <h2>What our Customers are Saying</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Perspiciatis, architecto?
        </p>
      </header>
      <div class="container">
        <div class="card testimonial">
          <div class="grid grid--1x2">
            <div class="testimonial__image" data-aos="fade-right">
              <img
                src="../assets/images/testimonial.jpg"
                alt="A happy, smiling customer"
              />
              <span class="icon-container icon-container--accent">
                <svg class="icon icon--white icon--small">
                  <use href="../assets/images/sprite.svg#quotes"></use>
                </svg>
              </span>
            </div>
            <blockquote class="quote" data-aos="fade-up">
              <p class="quote__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                ipsam adipisci possimus facilis? Et nostrum assumenda esse earum
                explicabo labore.
              </p>
              <footer>
                <div class="media">
                  <div class="media__image"></div>
                  <svg class="icon icon--primary quote__line">
                    <use href="../assets/images/sprite.svg#line"></use>
                  </svg>
                  <div class="media__body">
                    <h3 class="media__title quote__author">Tom Black</h3>
                    <p class="quote__organization">ACME Industries</p>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>  
</template>

<script>
export default {

}
</script>

<style>
/* *********************************************** */
/* Testimonials */

.testimonial {
  padding: 3rem;
}

.testimonial__image {
  position: relative;
}

.testimonial__image > img {
  width: 100%;
}

.testimonial__image > .icon-container {
  position: absolute;
  top: 3rem;
  right: -32px;
}

@media screen and (min-width: 768px) {
  .testimonial .quote,
  .testimonial .quote-author {
    font-size: 2.4rem;
  }

  .testimonial .quote {
    margin-left: 6rem;
  }
}

/* *********************************************** */
/* Quotes */

.quote {
  font-size: 3rem;
  font-style: italic;
  color: var(--color-headings);
  line-height: 1.3;
}

.quote__text::before {
  content: open-quote;
}

.quote__text::after {
  content: close-quote;
}

.quote__author {
  font-size: 3rem;
  font-weight: 500;
  font-style: normal;
  margin-bottom: 0;
}

.quote__organization {
  color: var(--color-headings);
  opacity: 0.4;
  font-size: 2rem;
  font-style: normal;
}

.quote__line {
  position: relative;
  bottom: 0;
}

@media screen and (min-width: 1024px) {
  .quote {
    font-size: 2rem;
  }

  .quote__author {
    font-size: 2.4rem;
  }

  .quote__organization {
    font-size: 1.6rem;
  }
}
</style>
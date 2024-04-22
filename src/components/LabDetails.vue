<template>
  <section class="lab-basics-block">
    <div class="lab-container">
      <!-- lab-details #1 -->
      <article class="lab-detail">
        <div class="lab-detail__content">
          <h2 class="lab-detail__heading">Eating our Own Dogfood</h2>
          <p class="lab-detail__info">
            In the Oncetold Laboratory, we've created a podcast for almost every category.
            We started podcasting because we loved the topic but have created other
            podcasts to learn what it takes to do it right. When we find a podcast format
            that draws in our curiosity, we conduct an experiment. The result is a new
            podcast and an experience that informs many of our practical workshops. This
            is a core principle to our teaching philosophy: see one, do one, teach one.
          </p>
          <p class="lab-detail__info">Here are a few of podcast experiments:</p>
          <ul>
            <li class="lab-detail__info">
              History:
              <a href="https://waryankee.com" target="_blank">War Yankee - Overland</a>
            </li>
            <li class="lab-detail__info">
              Audio Drama:
              <a href="https://pausefordramaticeffect.com" target="_blank"
                >PAUSE for Dramatic Effect</a
              >
            </li>
            <li class="lab-detail__info">
              Podcasting:
              <a href="https://podwrecked.com" target="_blank">Podwrecked</a>
            </li>
            <li class="lab-detail__info">
              Design:
              <a href="https://noteasilysquished.com" target="_blank"
                >Not Easily Squished</a
              >
            </li>
            <li class="lab-detail__info">
              Outdoor Sports:
              <a href="https://merchantsofdirt.com" target="_blank">Merchants of Dirt</a>
            </li>
            <li class="lab-detail__info">
              True Crime:
              <a
                href="https://truefans.fm/dark-roast-death-and-coffee?tab=episodes"
                target="_blank"
                >Dark Roast</a
              >
            </li>
            <li class="lab-detail__info">
              Non-Fiction:
              <a href="https://anonymoosefiles.com" target="_blank"
                >The AnonyMoose Files</a
              >
            </li>
          </ul>
        </div>
      </article>

      <!-- lab-details #2 -->
      <article class="lab-detail">
        <div class="lab-detail__content">
          <h2 class="lab-detail__heading">Our Podcasts for Podcasters</h2>
          <p class="lab-detail__info">
            We've built sharing into the DNA of Oncetold. We've given hundreds of
            <em>How to Podcast</em> talks that we've packaged into episodes you can find
            on <a href="https://podwrecked.com" target="_blank">Podwrecked</a> that focus
            on surviving your podcasts. We believe podcasting is a special environment for
            nurturing and incubating ideas and sharing our best podcast design principles
            on
            <a href="https://noteasilysquished.com/" target="_blank"
              >Not Easily Squished.</a
            >.
          </p>
          <p class="lab-detail__info">Here are our podcasts on podcasting:</p>
          <ul>
            <li class="lab-detail__info">
              Strategies & Tactics:
              <a href="https://podwrecked.com" target="_blank">Podwrecked</a>
            </li>
            <li class="lab-detail__info">
              Concept & Design:
              <a href="https://noteasilysquished.com/" target="_blank"
                >Not Easily Squished</a
              >
            </li>
          </ul>
        </div>
      </article>

      <!-- about-close -->
      <article class="lab-detail">
        <div class="lab-detail__content">
          <h2 class="lab-detail__heading">Always at your service</h2>
          <p class="lab-detail__info">
            If you have a general question for us, just drop me an email at
            <a href="emailto:oncetold.cloud@gmail.com">oncetold.cloud@gmail.com</a>. You
            can follow us on
            <a href="https://www.linkedin.com/company/89194872/" target="_blank"
              >Linkedin</a
            >
            and keep up with your
            <a
              href="https://www.linkedin.com/company/89194872/admin/feed/posts/"
              target="_blank"
              >latest thoughts and observations.</a
            >.
          </p>
        </div>
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

.lab-basics-block {
  padding-bottom: 5rem;
}

.lab-container {
  max-width: 1140px;
  margin: 0 auto;
}

.lab {
  gap: 4rem 2rem;
  margin: 2rem;
  /* background: var(--color-primary) */
}

.lab-detail-block {
  border-top: 2px solid var(--color-light);
  background: var(--color-primary);
  padding: 5rem 0 5rem;
  /* border: 2px solid red; */
}

.lab-detail {
  margin: 2rem 0 2rem 0;
  padding-bottom: 2rem;
}

.lab__box {
  padding: 0 2rem 0 2rem;
  border: 1px solid #fff;
}

.lab-detail__heading {
  margin: 1rem 0;
  line-height: 5rem;
}

.lab-detail__sub-heading {
  margin: 1rem 0;
  line-height: 3rem;
}

.lab-detail__box-heading {
  margin: 1rem 0 0 0;
  font-size: 3rem;
  line-height: 5rem;
}

.lab-detail__info {
  font-size: 2.1rem;
  line-height: 3.2rem;
}

.lab-detail__start {
  margin: 2rem 0 2rem 0;
  padding: 2rem 0 2rem 0;
  text-align: center;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
}

.lab-detail__start-heading {
  margin: 1rem 0;
  line-height: 5rem;
}

.lab-detail__start-sub-heading {
  font-size: 3rem;
  margin: 1rem 0;
  line-height: 3rem;
}

.lab-detail a {
  color: var(--color-headings);
  transition: color 0.3s;
  text-decoration: underline;
}

.lab-detail a:hover {
  color: var(--color-placeholder);
  text-decoration: none;
}

.lab-grid {
  display: grid;
}

@media screen and (min-width: 768px) {
  .lab:nth-of-type(even) .lab__box {
    order: 2;
  }

  .lab-grid--1x3 {
    grid-template-columns: repeat(3, 1fr);
  }

  .lab {
    gap: 0rem 3rem;
    margin: 0 0 4rem 0;
  }
}
</style>

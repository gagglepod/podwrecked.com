<template>
  <section class="video-list-basics-block">
    <div class="video-list-container">
      <!-- video-list #1 -->
      <article class="video-list-grid video-list-grid--1x2 video">
        <div class="video-list__content">
          <div class="video-list__left">
            <div class="video-list">
              <a href="/learn/videos/video-podcast-design-plan" class="video-list__link"
                ><img
                  src="/images/oncetold.us-podcast-design-plan-v2-800x300.jpg"
                  alt="Podcast Design Plan"
              /></a>
            </div>
          </div>

          <div class="video-list__right">
            <h2 class="video-list__heading">
              <a href="/learn/videos/video-podcast-design-plan" class="video-list__link"
                >Podcast Design Plan</a
              >
            </h2>
            <h3 class="video-list__subheading">
              Principles for Designing and Creating a Successful Podcast
            </h3>
            <p class="video-list__info">
              Avoid the most common pitfalls in podcasting by learning these five (5)
              principles for designing and creating a successful podcast.
            </p>
          </div>
        </div>
      </article>

      <!-- video-list #2 -->
      <article class="video-list-grid video-list-grid--1x2 video">
        <div class="video-list__content">
          <div class="video-list__left">
            <div class="video-list">
              <a href="/learn/videos/video-stop-podwrecking" class="video-list__link"
                ><img
                  src="/images/oncetold.us-stop-podwrecking-v2-800x300.jpg"
                  alt="Stop Podwrecking"
              /></a>
            </div>
          </div>

          <div class="video-list__right">
            <h2 class="video-list__heading">
              <a href="/learn/videos/video-stop-podwrecking" class="video-list__link"
                >Stop Podwrecking</a
              >
            </h2>
            <h3 class="video-list__subheading">How to create a podcast WHY statement</h3>
            <p class="video-list__info">
              Discover how creating a compelling WHY is the secret to keeping listeners,
              improving your show's quality, and maintaining your motivation.
            </p>
          </div>
        </div>
      </article>

      <!-- video-list #3 -->
      <article class="video-list-grid video-list-grid--1x2 video">
        <div class="video-list__content">
          <div class="video-list__left">
            <div class="video-list">
              <a href="/learn/videos/video-story-hunting" class="video-list__link"
                ><img
                  src="/images/oncetold.us-story-hunting-v1-800x300.jpg"
                  alt="Story Hunting"
              /></a>
            </div>
          </div>

          <div class="video-list__right">
            <h2 class="video-list__heading">
              <a href="/learn/videos/video-story-hunting" class="video-list__link"
                >Story Hunting</a
              >
            </h2>
            <h3 class="video-list__subheading">7 principles of good content design</h3>
            <p class="video-list__info">
              Learn how to build a podcast content strategy that will help you research
              good content, find what fits (and doesn't) your audience, and use it to
              build episodes.
            </p>
          </div>
        </div>
      </article>

      <!-- video-list #4 -->
      <article class="video-list-grid video-list-grid--1x2 video">
        <div class="video-list__content">
          <div class="video-list__left">
            <div class="video-list">
              <a href="/learn/videos/video-brand-podcast-design" class="video-list__link"
                ><img
                  src="/images/oncetold.us-brand-podcasts-v2-800x300.jpg"
                  alt="Brand Podcast Design"
              /></a>
            </div>
          </div>

          <div class="video-list__right">
            <h2 class="video-list__heading">
              <a href="/learn/videos/video-brand-podcast-design" class="video-list__link"
                >Brand Podcast Design</a
              >
            </h2>
            <h3 class="video-list__subheading">5 secrets to creating brand podcasts</h3>
            <p class="video-list__info">
              Learn how having a conversation with your customer about your willingness to
              solve their problems (without pushing the sale) is the secret to brand
              podcasting.
            </p>
          </div>
        </div>
      </article>

      <!-- video-list #5 -->
      <article class="video-list-grid video-list-grid--1x2 video">
        <div class="video-list__content">
          <div class="video-list__left">
            <div class="video-list">
              <a
                href="/learn/videos/video-what-is-your-weird-thing"
                class="video-list__link"
                ><img
                  src="/images/oncetold.us-whats-your-weird-thing-v1-800x300.jpg"
                  alt="What is Your Weird Thing?"
              /></a>
            </div>
          </div>

          <div class="video-list__right">
            <h2 class="video-list__heading">
              <a
                href="/learn/videos/video-what-is-your-weird-thing"
                class="video-list__link"
                >What is Your Weird Thing?</a
              >
            </h2>
            <h3 class="video-list__subheading">Learn what moments capture a listener</h3>
            <p class="video-list__info">
              Discover the things that make these 5 super successful podcasters just weird
              enough to get you to fall in love with their show.
            </p>
          </div>
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
/* Common Styles */
.video-list-container {
  max-width: 1140px;
  margin: 0 auto;
  padding-top: 4rem;
}

.video-list-start-block {
  padding: 0;
}

.video-list-start {
  margin: 2rem 2rem 4rem 2rem;
  padding: 2rem 0;
  text-align: center;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
}

.video-list__heading {
  text-align: left;
  margin: 0 0 1rem 0;
}

.video-list__subheading {
  text-align: left;
  margin: 0 0 1rem 0;
}

.video-list__info {
  text-align: left;
  color: var(--color-headings);
  letter-spacing: 0.1rem;
  margin-top: 1rem;
  padding: 0;
}

.video-list__content {
  margin-bottom: 4rem;
}

.video-list__left,
.video-list__right {
  width: 100%;
}

.video-list__left img,
.video-list__right img {
  width: 100%;
  border-radius: 2rem;
  height: auto;
}

.video-list {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-bottom: 1rem; /* 16:9 aspect ratio */
  border-radius: 2rem;
}

.video-list__link {
  color: var(--color-header);
}

.video-list__link:hover {
  color: var(--color-light);
  text-decoration: underline;
}

@media screen and (min-width: 768px) {
  .video-list__content {
    display: flex;
    flex-wrap: wrap;
  }

  .video-list__left,
  .video-list__right {
    flex: 1;
    max-width: calc(50% - 1rem); /* Adjusted to account for spacing */
  }

  .video-list__left {
    margin-right: 2rem; /* Add margin to the right of the left image */
  }
}

@media screen and (max-width: 767px) {
  .video-list__left,
  .video-list__right {
    max-width: 100%;
    padding: 0 1rem;
    margin-right: 0; /* Remove margin on smaller screens */
    margin-bottom: 2rem; /* Add margin between images on smaller screens */
  }
}
</style>

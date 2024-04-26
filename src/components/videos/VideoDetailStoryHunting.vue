<template>
  <section class="video-detail-block video-detail-block--dark">
    <div class="video-detail-container">
      <picture class="video-detail-summary__image">
        <img
          src="/images/oncetold.us-story-hunting-v1-1600x600.jpg"
          alt="Podcast Design Plan"
        />
      </picture>
    </div>
  </section>

  <section class="video-detail-block">
    <div class="video-detail-container">
      <!-- video-detail #1 -->
      <article class="video-detail-grid video-detail-grid--1x2 video">
        <div class="video-detail__content">
          <div class="video-detail__left">
            <div class="video-detail__youtube">
              <iframe
                id="ytplayer"
                type="text/html"
                src="https://www.youtube.com/embed/8rABcF4fJkY?si=dy7D3uwS-PmEckYC"
                title="Story Hunting: Learn how to build a podcast content strategy"
                frameborder="0"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                width="100%"
                height="100%"
                style="min-width: 100%; min-height: 100%"
              ></iframe>
            </div>
          </div>

          <div class="video-detail__right">
            <h2 class="video-detail__heading">Story Hunting</h2>
            <h3 class="video-detail__subheading">
              Learn how to build a podcast content strategy
            </h3>
            <p class="video-detail__info">
              Walk you through 7 principles to good content design that you can use to
              find good content, decide what content belongs in your show (and what does
              not), and how to organize your episodes to keep your show on target when
              your motivation has run away.
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "CourseDetailIntroToPodcastDesign",
};
</script>

<style>
/* *********************************************** */
/* Features */
.video-detail-block {
  padding: 2rem 0; /* Adjusted to 2rem bottom padding */
}

.video-detail-container {
  max-width: 1140px;
  margin: 0 auto;
}

.video-detail {
  gap: 4rem 1rem;
  margin: 2rem 2rem;
}

.video-detail-summary__image > img {
  width: 100%;
  border-radius: 2rem;
}

.video-detail-grid {
  display: grid;
  margin: 0;
}

.video-detail__heading {
  text-align: left;
  margin: 1rem 0 1rem 0;
}

.video-detail__subheading {
  text-align: left;
  line-height: 3rem;
  margin: 0 0 2rem 0;
}

.video-detail__info {
  text-align: left;
  color: var(--color-headings);
  letter-spacing: 0.1rem;
  margin-top: 1rem;
  padding: 0;
}

.video-detail__content {
  margin-bottom: 1rem;
}

.video-detail__youtube {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  border-radius: 2rem;
}

.video-detail__youtube > iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.video-detail__left {
  margin-right: 0; /* Add margin to the right of the left video */
}

.video-detail__right {
  margin-left: 2rem; /* Add margin to the left of the right text */
}

.video-detail__link {
  color: var(--color-header);
}

.video-detail__link:hover {
  color: var(--color-light);
  transition: color 0.3s;
  text-decoration: underline;
}

@media screen and (max-width: 767px) {
  .video-detail-grid--1x2 {
    grid-template-columns: 1fr;
  }

  .video-detail {
    gap: 0rem 3rem;
    margin: 0;
  }

  .video-detail__left {
    max-width: 100%;
    padding: 0 1rem;
    margin-right: 0; /* Remove margin on smaller screens */
    margin-bottom: 2rem; /* Add margin between images on smaller screens */
  }

  .video-detail__right {
    max-width: 100%;
    padding: 0 1rem;
    margin-right: 0; /* Remove margin on smaller screens */
    margin-bottom: 2rem; /* Add margin between images on smaller screens */
  }

  .video-detail__subheading {
    line-height: 4rem;
  }

  .video-detail__youtube {
    padding-bottom: 0; /* Reset padding for video */
    position: relative;
    padding-top: 56.25%; /* 16:9 aspect ratio */
  }

  .video-detail__youtube > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
}

/* Adjustments for large screens */
@media screen and (min-width: 768px) {
  .video-detail__content {
    display: flex;
    flex-wrap: wrap;
  }

  .video-detail__left,
  .video-detail__right {
    flex: 1;
    max-width: calc(50% - 1rem); /* Adjusted to account for spacing */
  }
}
</style>

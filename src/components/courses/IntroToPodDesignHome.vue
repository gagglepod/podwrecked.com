<template>
  <section class="course-start-block">
    <div class="course-container">
      <article class="course-detail-start">
        <h2 class="course-detail__start-heading">Introduction to Podcast Design</h2>
      </article>
    </div>
  </section>

  <section class="course-basics-block">
    <div class="course-container">
      <!-- course-detail #1 -->
      <article class="course-grid course-grid--1x2 course">
        <div class="course-detail__content">
          <div class="course-detail__left">
            <h3 class="course-detail__start-sub-heading">Once Upon a Time</h3>

            <p class="course-detail__info">
              Intrigued by the process of podcast design? Want to learn the basics? You’ve
              come to the right place!
            </p>

            <p class="course-detail__info">
              This course is designed to teach you the basics with an easy process to
              follow, and pointers for where to learn more.
            </p>

            <p class="course-detail__info">
              The process we illustrate has three phases: Design, Build and Share.
            </p>
            <p class="course-detail__info">
              <a href="/courses"
                ><button class="btn btn--secondary btn--stretched">Get Started</button></a
              >
            </p>
          </div>

          <div class="course-detail__right">
            <!-- IMAGE -->
            <img src="/images/tincan-man-400x400.png" alt="Tincan Man Podcast" />
          </div>
        </div>
      </article>

      <!-- course-detail #2 -->
      <article class="course-pucks">
        <div class="course-pucks-header">
          <h3 class="course-detail__puck-title">For each phase, you will</h3>
        </div>
        <div class="course-grid course-grid--1x4 course">
          <div class="course__pucks">
            <h3 class="course-detail__puck-heading">Learn the Process</h3>
            <p class="course-detail__puck-info">
              Use core design principles to turn an idea into a podcast.
            </p>
          </div>
          <div class="course__pucks">
            <h3 class="course-detail__puck-heading">Know your Space</h3>
            <p class="course-detail__puck-info">
              Understand how your idea fits into a special niche.
            </p>
          </div>
          <div class="course__pucks">
            <h3 class="course-detail__puck-heading">Pull it Together</h3>
            <p class="course-detail__puck-info">
              Take your idea, purpose, and story and build a prototype.
            </p>
          </div>
          <div class="course__pucks">
            <h3 class="course-detail__puck-heading">Serve your Audience</h3>
            <p class="course-detail__puck-info">
              Test your idea, improve your reach, and find your people.
            </p>
          </div>
        </div>
        <div class="course-detail__puck-button">
          <a href="/courses"
            ><button class="btn btn--secondary btn--stretched">
              Let's Start with Design
            </button></a
          >
        </div>
      </article>

      <!-- course-detail #3 -->
      <article class="course-grid course-grid--1x3 learn">
        <div class="course__box">
          <h2 class="course-detail__box-heading">
            <a href="/lab" class="course-detail__link">Phase 1: Design</a>
          </h2>
          <p class="course-detail__info">
            Dig deep into the principles and process of podcast design. Take some time to
            explore the "Why" that expresses your purpose, defines your space, and informs
            the approach you take on your topic.
          </p>
        </div>
        <div class="course__box">
          <h2 class="course-detail__box-heading">
            <a href="/lab" class="course-detail__link">Phase 2: Build</a>
          </h2>
          <p class="course-detail__info">
            Take your meticulously crafted design and start weaving your story and style
            together into a podcast. This will become the baseline strategy for growing
            your audience one episode at a time.
          </p>
        </div>
        <div class="course__box">
          <h2 class="course-detail__box-heading">
            <a href="/lab" class="course-detail__link">Phase 3: Share</a>
          </h2>
          <p class="course-detail__info">
            Sharing each episode with your audience requires you to develop a system for
            constant refinement. Each episode is another chance for you to improve and
            reach a new listener.
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "IntroToPodcastDesignHome",
};
</script>

<style>
/* *********************************************** */
/* Features */

.course-container {
  max-width: 1140px;
  margin: 0 auto;
}

.course-pucks {
  padding: 0;
}

.course-pucks-header {
  border-top: 1px solid var(--color-light);
  margin: 2rem;
  padding: 3rem 0 1rem 0;
}

.course {
  gap: 4rem 1rem;
  margin: 2rem 2rem;
}

.course-start-block {
  padding: 0;
}

.course-detail-block {
  border-top: 2px solid var(--color-light);
  background: var(--color-primary);
  padding: 5rem 0 5rem;
}

.course-detail {
  margin: 2rem 0;
}

.course-detail__content {
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 2rem 0;
  justify-content: center;
}

.course-detail__left {
  flex: 3;
  padding: 0;
}

.course-detail__right {
  flex: 2;
  display: flex;
  justify-content: center;
  max-width: 400px; /* Set maximum width for the image container */
  padding: 0 0 0 2rem;
}

.course-detail__right img {
  width: 100%; /* Ensure the image takes the full width of its container */
  height: auto;
}

.course__box {
  padding: 0 2rem;
  border: 1px solid #fff;
}

.course-detail__heading {
  margin: 1rem 0;
  line-height: 5rem;
}

.course-detail__sub-heading {
  margin: 1rem 0;
  line-height: 3rem;
}

.course-detail__box-heading {
  margin: 1rem 0 0;
  font-size: 3rem;
  line-height: 5rem;
}

.course-detail__info {
  font-size: 2.1rem;
  line-height: 3.2rem;
}

.course__pucks {
  flex: 1; /* Ensure each item takes equal space */
  border: 1px solid #fff;
  padding: 1rem; /* Adjust padding to control spacing */
  margin-bottom: 0; /* Add margin between items */
  text-align: center;
}

.course-detail__puck-title {
  margin: 1rem 0;
  font-size: 3rem;
  line-height: 3rem;
  text-align: center;
}

.course-detail__puck-heading {
  margin: 1rem 0 1rem 0;
  font-size: 2.2rem;
  line-height: 2.8rem;
}

.course-detail__puck-info {
  font-size: 1.8rem;
  line-height: 3rem;
}

.course-detail__puck-button {
  text-align: center;
  padding-bottom: 4rem;
}

.course-detail-start {
  margin: 2rem 2rem 4rem 2rem;
  padding: 2rem 0;
  text-align: center;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
}

.course-detail__start-heading {
  margin: 1rem 0;
  line-height: 5rem;
}

.course-detail__start-sub-heading {
  font-size: 3rem;
  margin: 1rem 0;
  line-height: 3rem;
}

.course-detail a {
  color: var(--color-headings);
  transition: color 0.3s;
  text-decoration: underline;
}

.course-detail a:hover {
  color: var(--color-placeholder);
  text-decoration: none;
}

.course-grid {
  display: grid;
  margin: 2rem 2rem;
}

.course-detail__link {
  color: var(--color-header);
}

.course-detail__link:hover {
  color: var(--color-light);
  text-decoration: underline;
}

@media screen and (max-width: 767px) {
  .course-grid--1x2,
  .course-grid--1x3,
  .course-grid--1x4 {
    grid-template-columns: 1fr;
  }

  .course {
    gap: 0rem 3rem;
    margin: 0;
  }

  .course-detail__left {
    padding: 1rem 2rem 0 2rem;
  }

  .course-detail__right {
    order: -1;
    flex-basis: 100%;
    padding: 0;
  }

  .course-detail__right > img {
    width: 100%;
    padding: 0;
  }

  .course__box {
    margin: 2rem;
  }
}

/* Adjustments for large screens */
@media screen and (min-width: 768px) {
  .course-grid--1x3 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .course-grid--1x4 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .course__box {
    flex: 0 0 calc(33.33% - 2rem);
    margin-bottom: 2rem;
  }
}
</style>

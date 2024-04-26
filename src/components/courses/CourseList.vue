<template>
  <section class="course-list-basics-block">
    <div class="course-list-container">
      <!-- course-list #1 -->
      <article class="course-list-grid course-list-grid--1x2 video">
        <div class="course-list__content">
          <div class="course-list__left">
            <div class="course-list">
              <a
                href="/learn/courses/course-intro-to-podcast-design/"
                class="course-list__link"
                ><img
                  src="/images/oncetold.us-say-what-v1-800x300.jpg"
                  alt="Introduction to Podcast Design"
              /></a>
            </div>
          </div>

          <div class="course-list__right">
            <h2 class="course-list__heading">
              <a
                href="/learn/courses/course-intro-to-podcast-design/"
                class="course-list__link"
                >Introduction to Podcast Design</a
              >
            </h2>
            <h3 class="course-list__subheading">
              Principles for Designing and Creating a Successful Podcast
            </h3>
            <p class="course-list__info">
              This course will teach you the basics of podcast design with an easy to
              follow process.
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
.course-list-container {
  max-width: 1140px;
  margin: 0 auto;
  padding-top: 4rem;
}

.course-list-start-block {
  padding: 0;
}

.course-list-start {
  margin: 2rem 2rem 4rem 2rem;
  padding: 2rem 0;
  text-align: center;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
}

.course-list__heading {
  text-align: left;
  margin: 0 0 1rem 0;
}

.course-list__subheading {
  text-align: left;
  margin: 0 0 1rem 0;
}

.course-list__info {
  text-align: left;
  color: var(--color-headings);
  letter-spacing: 0.1rem;
  margin-top: 1rem;
  padding: 0;
}

.course-list__content {
  margin-bottom: 4rem;
}

.course-list__left,
.course-list__right {
  width: 100%;
}

.course-list__left img,
.course-list__right img {
  width: 100%;
  border-radius: 2rem;
  height: auto;
}

.course-list {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-bottom: 1rem; /* 16:9 aspect ratio */
  border-radius: 2rem;
}

.course-list__link {
  color: var(--color-header);
}

.course-list__link:hover {
  color: var(--color-light);
  text-decoration: underline;
}

@media screen and (min-width: 768px) {
  .course-list__content {
    display: flex;
    flex-wrap: wrap;
  }

  .course-list__left,
  .course-list__right {
    flex: 1;
    max-width: calc(50% - 1rem); /* Adjusted to account for spacing */
  }

  .course-list__left {
    margin-right: 2rem; /* Add margin to the right of the left image */
  }
}

@media screen and (max-width: 767px) {
  .course-list__left,
  .course-list__right {
    max-width: 100%;
    padding: 0 1rem;
    margin-right: 0; /* Remove margin on smaller screens */
    margin-bottom: 2rem; /* Add margin between images on smaller screens */
  }
}
</style>

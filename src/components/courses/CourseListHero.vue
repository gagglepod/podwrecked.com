<template>
  <section class="course-list-hero-block block--course-list-hero">
    <div class="container">
      <header class="course-list-hero-block__header">
        <div class="course-list-hero__heading-img">
          <img
            class="course-list-hero-logo"
            src="../../assets/images/oncetold-logo-sm.svg"
          />
        </div>
        <h1 class="course-list-hero__heading">Oncetold Courses</h1>
        <p class="course-list-hero__shortline">
          <strong>Courses, Articles, and Curated Talks</strong> course-list-hero learning
          how to create and design podcasts.
        </p>
        <p class="course-list-hero__shortline">
          <strong>Get Inspired: </strong> We are podcasters too! That's how we know that
          podcasting is the only tried and tested medium for getting all of your thoughts
          and ideas out of your head and into your listener's ears.
        </p>
        <p class="course-list-hero__shortline">
          <strong>Get Started: </strong> To help you get started we've curated many of our
          informed opinions (based on experience) and hard-fought lessons learned into
          library of podcasting knowledge that contains contains everything you need to
          start podcasting.
        </p>
      </header>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.course-list-hero-block {
  display: flex;
  flex-direction: column;
  padding: 3rem 0 5rem;
  /* border: 2px solid red; */
}

.block--course-list-hero {
  background: var(--color-primary-alt);
  color: var(--color-headings);
}

.course-list-hero-block__header {
  text-align: center;
  margin: 2rem 0 2rem;
}

.course-list-hero__heading {
  margin-top: 0;
}

.course-list-hero__shortline {
  font-size: 2rem;
  color: var(--color-headings);
  letter-spacing: 1px;
  margin-top: 1rem 0 1rem;
}

.course-list-hero__heading-img {
  flex: 1;
  padding: 0;
}

.course-list-hero-logo {
  height: 64px;
  margin: 0;
}

.course-list-hero__shortline a {
  color: var(--color-headings);
  transition: color 0.3s;
  text-decoration: underline;
}

.course-list-hero__shortline a:hover {
  color: var(--color-placeholder);
  text-decoration: none;
}

@media screen and (min-width: 768px) {
  .course-list-hero-block {
    padding-top: 0;
  }

  .course-list-hero__heading {
    padding: 0 10rem 0 10rem;
  }

  .course-list-hero__shortline {
    padding: 2rem 10rem 0 10rem;
  }

  .course-list-hero-logo {
    height: 96px;
    margin: 0;
  }
}
</style>

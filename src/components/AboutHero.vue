<template>
  <section class="about-block block--how">
    <div class="container">
      <header class="about-block__header">
        <div class="about__heading-img">
          <img class="about-logo" src="../assets/images/t-rex-drawing-big-v2.svg" />
        </div>
        <a class="about__brand" href="/"
          ><img
            class="about-logo-text logo-primary"
            src="../assets/images/flowgnar-about.svg"
            alt="Flowgnar Logo"
        /></a>
        <h2>Embrace the Flow, Chew the Gnar!</h2>
      </header>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.about-block {
  display: flex;
  flex-direction: column;
  padding: 3rem 0 5rem;
  /* border: 2px solid red; */
}

.block--how {
  background: var(--color-dino-sky);
  color: var(--color-headings);
}

.about-block__header {
  text-align: center;
  margin: 2rem 0 2rem;
}

.about__heading {
  margin-top: 0;
}

.about__shortline {
  font-size: 2rem;
  color: var(--color-headings);
  letter-spacing: 1px;
  margin-top: 1rem 0 1rem;
}

.about__heading-img {
  flex: 1;
  padding: 0;
}

.about-logo {
  height: 120px;
  margin: 0;
}

.about__brand {
  transform: translateY(5px);
}

.about-logo-text {
  width: 300px;
  padding-bottom: 0.25rem;
}

@media screen and (min-width: 768px) {
  .about-block {
    padding-top: 0;
  }

  .about__heading {
    padding: 0 10rem 0 10rem;
  }

  .about__shortline {
    padding: 2rem 10rem 0 10rem;
  }

  .about-logo {
    height: 120px;
    margin: 0;
  }

  .about-logo-text {
    height: 165px;
    padding-bottom: 0.25rem;
  }
}
</style>

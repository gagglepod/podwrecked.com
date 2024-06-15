<template>
  <section class="not-found-block block--not-found">
    <div class="container">
      <header class="not-found-block__header">
        <div class="not-found__heading-img">
          <img class="not-found-logo" src="../assets/images/t-rex-drawing-big-v2.svg" />
        </div>
        <h1 class="not-found__heading">404</h1>
        <p class="not-found__shortline">
          Whoops! Now a word from Oncetold Web Engineer, Buck Futz:
        </p>
        <h2 class="not-found__heading">
          <em>"Something Broke!"</em>
        </h2>
      </header>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.not-found-block {
  display: flex;
  flex-direction: column;
  padding: 3rem 0 5rem;
  /* border: 2px solid red; */
}

.block--not-found {
  background: var(--color-dino-sky);
  color: var(--color-headings);
}

.not-found-block__header {
  text-align: center;
  margin: 2rem 0 2rem;
}

.not-found__heading {
  margin-top: 0;
}

.not-found__shortline {
  font-size: 2rem;
  color: var(--color-headings);
  letter-spacing: 1px;
  margin-top: 1rem 0 1rem;
}

.not-found__heading-img {
  flex: 1;
  padding: 0;
}

.not-found-logo {
  height: 120px;
  margin: 0;
}

@media screen and (min-width: 768px) {
  .not-found-block {
    padding-top: 0;
  }

  .not-found__heading {
    padding: 0 10rem 0 10rem;
  }

  .not-found__shortline {
    padding: 2rem 10rem 0 10rem;
  }

  .not-found-logo {
    height: 120px;
    margin: 0;
  }
}
</style>

<template>
  <section class="block block--hero bottom">
    <div class="container grid grid--1x1">
      <header class="bottom__header bottom__content">
        <h2 class="bottom__heading">
          <a href="#" class="bottom__link">Are You Ready to Tell Your Story?</a>
        </h2>
        <a href="https://oncetold.cloud" target="_blank"
          ><button class="btn btn--secondary btn--stretched">The Time is Now</button></a
        >
      </header>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.bottom {
  display: flex;
  flex-direction: column;
  border-top: 2px solid var(--color-light);
}

.bottom__header {
  text-align: center;
  margin-bottom: 4rem;
}

.bottom__heading {
  margin-top: 0;
}

.bottom__link {
  color: var(--color-header);
}

.bottom__link:hover {
  color: var(--color-light);
  text-decoration: underline;
}

@media screen and (min-width: 768px) {
  .bottom {
    padding-top: 0;
  }

  .bottom__content {
    text-align: center;
    align-self: center;
    padding: 10rem 0 4rem 0;
  }

  .bottom__heading {
    padding: 0 10rem 0 10rem;
  }
}
</style>

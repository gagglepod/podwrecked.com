<template>
  <section class="block block--hero bottom">
    <div class="container grid grid--1x1">
      <header class="bottom__header bottom__content">
        <!-- <h2 class="bottom__heading">
          You have questions? <a href="#" class="bottom__link">We have answers.</a>
        </h2> -->
        <h2 class="bottom__heading">
          <a href="https://oncetold.cloud" class="bottom__link"
            >The time is now. Are you ready?</a
          >
        </h2>
        <a href="https://oncetold.cloud" target="_blank"
          ><button class="btn btn--secondary btn--stretched">
            I am ready to start telling my story
          </button></a
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
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
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

/* Increase size of heart icon when hovered */
.bottom__content .heart {
  transition: transform 0.3s ease-in-out; /* Add transition for smooth scaling */
}

/* Increase size of heart icon when hovered on small screens */
@media screen and (max-width: 767px) {
  .bottom__content .heart:hover {
    transform: scale(1.2); /* Increase the size of the heart icon */
  }

  .bottom__content {
    padding: 10rem 0 4rem 0;
  }
}

@media screen and (min-width: 768px) {
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

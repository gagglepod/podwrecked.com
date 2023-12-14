<template>
  <section class="how-block block--how">
    <div class="container">
      <header class="how-block__header">
        <div class="how__heading-img">
          <img class="how-logo" src="../assets/images/oncetold-logo-sm.svg" />
        </div>
        <h1 class="how__heading">No Engineering Degree Required</h1>
        <p class="how__shortline">
          Oncetold is a better way to build your show. Because we are podcasters too, we
          designed Oncetold from the ground up to be an easier way to create your
          episodes. By removing the over engineered forms and complicated processes, we
          created a hosting experience that focuses on building your show and not learning
          a new tool.
        </p>
        <p class="how__shortline">
          <strong>Here's how Oncetold makes it happen.</strong>
        </p>
      </header>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.how-block {
  display: flex;
  flex-direction: column;
  padding: 3rem 0 5rem;
  /* border: 2px solid red; */
}

.block--how {
  background: var(--color-primary-alt);
  color: var(--color-headings);
}

.how-block__header {
  text-align: center;
  margin: 2rem 0 2rem;
}

.how__heading {
  margin-top: 0;
}

.how__shortline {
  font-size: 2rem;
  color: var(--color-headings);
  letter-spacing: 1px;
  margin-top: 1rem 0 1rem;
}

.how__heading-img {
  flex: 1;
  padding: 0;
}

.how-logo {
  height: 64px;
  margin: 0;
}

@media screen and (min-width: 768px) {
  .how-block {
    padding-top: 0;
  }

  .how__heading {
    padding: 0 10rem 0 10rem;
  }

  .how__shortline {
    padding: 2rem 10rem 0 10rem;
  }

  .how-logo {
    height: 96px;
    margin: 0;
  }
}
</style>

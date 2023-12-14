<template>
    <section class="support-block block--support">
        <div class="container">
        <header class="support-block__header">
            <div class="support__heading-img">
                <img class="support-logo" src="../assets/images/oncetold-logo-sm.svg" />
            </div>
            <h1 class="support__heading">Real People, Real Help</h1>
            <h2 class="support__heading">Oncetold Support 24/7</h2>
            <p class="support__shortline">We believe in giving you real support without the bots and call center run-a-round. Get a real person on the phone or chat and have your problem solved!</p>
        </header>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.support-block {
  display: flex;
  flex-direction: column;
  padding: 3rem 0 5rem;
  /* border: 2px solid red; */
}

.block--support {
  background: var(--color-primary-alt);
  color: var(--color-headings);
}

.support-block__header {
  text-align: center;
  margin: 2rem 0 2rem;
}

.support__heading {
  margin-top: 0;
}

.support__shortline {
  font-size: 2rem;
  color: var(--color-headings);
  letter-spacing: 1px;
  margin-top: 1rem 0 1rem;
}

.support__heading-img {
  flex: 1;
  padding: 0;
}

.support-logo {
  height: 64px;
  margin: 0;
}

@media screen and (min-width: 768px) {
  .support-block {
    padding-top: 0;
  }

  .support__heading {
    padding: 0 10rem 0 10rem;
  }

  .support__shortline {
    padding: 2rem 10rem 0 10rem;
  }

  .support-logo {
    height: 96px;
    margin: 0;
    }
}
</style>
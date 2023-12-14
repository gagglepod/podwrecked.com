<template>
    <section class="how-block block--how">
        <div class="container">
        <header class="how-block__header">
            <div class="how__heading-img">
                <img class="how-logo" src="../assets/images/oncetold-logo-sm.svg" />
            </div>
            <h1 class="how__heading">Oncetold Bill of Rights</h1>
            <p class="how__shortline">Here at Oncetold, we're serious about treating our customers fairly. That's why as a Oncetold customer, you have the right to...</p>
        </header>
        </div>
    </section>
</template>

<script>
export default {

}
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
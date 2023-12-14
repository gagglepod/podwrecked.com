<template>
    <div class="container">
      <div class="callout callout--primary callout-signup">
        <div class="grid grid--1x2">
          <div class="callout__content">
            <h2 class="callout__heading">Ready to Get Started?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              voluptate tempora qui distinctio consequatur aliquid pariatur
              cupiditate quas cum fugit.
            </p>
          </div>
          <a
            target="_blank"
            href="https://codewithmosh.com"
            class="btn btn--secondary btn--stretched"
            >Get Started</a
          >
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
/* *********************************************** */
/* Callouts */

.callout {
  padding: 4rem;
  border-radius: 5px;
}

.callout--primary {
  background: var(--color-primary);
  color: #fff;
}

.callout__heading {
  color: #fff;
  margin-top: 0;
  font-size: 3rem;
}

.callout .btn {
  justify-self: center;
  align-self: center;
}

.callout__content {
  text-align: center;
}

.callout-signup {
  transform: translateY(5rem);
}

@media screen and (min-width: 768px) {
  .callout .grid--1x2 {
    grid-template-columns: 1fr auto;
  }
  .callout__content {
    text-align: left;
  }
  .callout .btn {
    justify-self: start;
    margin: 0 2rem;
  }
}
</style>
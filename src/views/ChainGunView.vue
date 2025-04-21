<template>
  <TheHero />
  <TheChainGun />
  <!-- <TheBottom /> -->
</template>

<script>
import TheHero from "../components/TheHero.vue";
import TheChainGun from "../components/TheChainGun.vue";
// import TheBottom from "../components/TheBottom.vue";

export default {
  name: "HomeView",
  components: {
    TheHero,
    TheChainGun,
    // TheBottom,
  },
};
</script>

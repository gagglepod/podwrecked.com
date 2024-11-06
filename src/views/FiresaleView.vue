<template>
  <TheHero />
  <TheFiresale />
  <!-- <TheBottom /> -->
</template>

<script>
import TheHero from "../components/TheHero.vue";
import TheFiresale from "../components/TheFiresale.vue";
// import TheBottom from "../components/TheBottom.vue";

export default {
  name: "HomeView",
  components: {
    TheHero,
    TheFiresale,
    // TheBottom,
  },
};
</script>

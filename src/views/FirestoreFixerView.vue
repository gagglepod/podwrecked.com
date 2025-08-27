<template>
  <TheHero />
  <FirestoreFixer />
  <!-- <TheBottom /> -->
</template>

<script>
import TheHero from "../components/TheHero.vue";
import FirestoreFixer from "../components/FirestoreFixer.vue";
// import TheBottom from "../components/TheBottom.vue";

export default {
  name: "HomeView",
  components: {
    TheHero,
    FirestoreFixer,
    // TheBottom,
  },
};
</script>

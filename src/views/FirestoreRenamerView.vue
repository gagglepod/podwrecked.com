<template>
  <TheHero />
  <FirestoreRenamer />
  <!-- <TheBottom /> -->
</template>

<script>
import TheHero from "../components/TheHero.vue";
import FirestoreRenamer from "../components/FirestoreRenamer.vue";
// import TheBottom from "../components/TheBottom.vue";

export default {
  name: "HomeView",
  components: {
    TheHero,
    FirestoreRenamer,
    // TheBottom,
  },
};
</script>

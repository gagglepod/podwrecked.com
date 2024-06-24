<template>
  <AboutHero />
  <AboutDetails />
</template>

<script>
import AboutHero from "../components/AboutHero.vue";
import AboutDetails from "../components/AboutDetails.vue";

export default {
  name: "HowView",
  components: {
    AboutHero,
    AboutDetails,
  },
};
</script>

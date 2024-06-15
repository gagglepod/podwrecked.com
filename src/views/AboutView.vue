<template>
  <AboutHero />
  <CloudRow />
  <AboutDetails />
</template>

<script>
import AboutHero from "../components/AboutHero.vue";
import CloudRow from "../components/CloudRow.vue";
import AboutDetails from "../components/AboutDetails.vue";

export default {
  name: "HowView",
  components: {
    AboutHero,
    CloudRow,
    AboutDetails,
  },
};
</script>

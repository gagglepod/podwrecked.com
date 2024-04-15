<template>
  <AboutHero />
  <CloudRow />
  <TheStory />
  <AboutDetails />
  <TheCall />
</template>

<script>
import AboutHero from "../components/AboutHero.vue";
import CloudRow from "../components/CloudRow.vue";
import TheStory from "../components/TheStory.vue";
import AboutDetails from "../components/AboutDetails.vue";
import TheCall from "../components/TheCall.vue";

export default {
  name: "HowView",
  components: {
    AboutHero,
    CloudRow,
    TheStory,
    AboutDetails,
    TheCall,
  },
};
</script>

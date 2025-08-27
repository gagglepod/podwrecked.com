<template>
  <TheHero />
  <RSSRefeeder />
  <!-- <TheBottom /> -->
</template>

<script>
import TheHero from "../components/TheHero.vue";
import RSSRefeeder from "../components/RSSRefeeder.vue";
// import TheBottom from "../components/TheBottom.vue";

export default {
  name: "HomeView",
  components: {
    TheHero,
    RSSRefeeder,
    // TheBottom,
  },
};
</script>

<template>
  <TheHero />
  <RSSFeeder />
  <!-- <TheBottom /> -->
</template>

<script>
import TheHero from "../components/TheHero.vue";
import RSSFeeder from "../components/RSSFeeder.vue";
// import TheBottom from "../components/TheBottom.vue";

export default {
  name: "HomeView",
  components: {
    TheHero,
    RSSFeeder,
    // TheBottom,
  },
};
</script>

<template>
  <TheHeader />
  <router-view />
  <TheBanner />
  <TheFooter />
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheBanner from "./components/TheBanner.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: { TheHeader, TheBanner, TheFooter },
};
</script>

<style></style>

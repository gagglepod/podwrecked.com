<template>
  <PageNotFoundHero />
  <CloudRow />
  <TheSplash />
</template>

<script>
import PageNotFoundHero from "../components/PageNotFoundHero.vue";
import CloudRow from "../components/CloudRow.vue";
import TheSplash from "../components/TheSplash.vue";

export default {
  name: "PageNotFound",
  components: {
    PageNotFoundHero,
    CloudRow,
    TheSplash,
  },
};
</script>

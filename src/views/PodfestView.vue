<template>
  <PodfestHero />
  <CloudRow />
  <PodfestDetails />
  <TheBottom />
</template>

<script>
import PodfestHero from "../components/PodfestHero.vue";
import CloudRow from "../components/CloudRow.vue";
import PodfestDetails from "../components/PodfestDetails.vue";
import TheBottom from "../components/TheBottom.vue";

export default {
  name: "PodfestView",
  components: {
    PodfestHero,
    CloudRow,
    PodfestDetails,
    TheBottom,
  },
};
</script>

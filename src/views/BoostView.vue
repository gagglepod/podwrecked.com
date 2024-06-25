<template>
  <BoostHero />
  <BoostDetails />
</template>

<script>
import BoostHero from "../components/BoostHero.vue";
import BoostDetails from "../components/BoostDetails.vue";

export default {
  name: "BoostView",
  components: {
    BoostHero,
    BoostDetails,
  },
};
</script>

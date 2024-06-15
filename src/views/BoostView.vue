<template>
  <BoostHero />
  <CloudRow />
  <BoostDetails />
</template>

<script>
import BoostHero from "../components/BoostHero.vue";
import CloudRow from "../components/CloudRow.vue";
import BoostDetails from "../components/BoostDetails.vue";

export default {
  name: "BoostView",
  components: {
    BoostHero,
    CloudRow,
    BoostDetails,
  },
};
</script>

<template>
  <DisclaimerHero />
  <CloudRow />
  <DisclaimerDetails />
</template>

<script>
import DisclaimerHero from "../components/DisclaimerHero.vue";
import CloudRow from "../components/CloudRow.vue";
import DisclaimerDetails from "../components/DisclaimerDetails.vue";

export default {
  name: "FooterDisclaimerView",
  components: {
    DisclaimerHero,
    CloudRow,
    DisclaimerDetails,
  },
};
</script>

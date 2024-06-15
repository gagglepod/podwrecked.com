<template>
  <LicensesHero />
  <CloudRow />
  <LicensesDetails />
  <TheBottom />
</template>

<script>
import LicensesHero from "../components/LicensesHero.vue";
import CloudRow from "../components/CloudRow.vue";
import LicensesDetails from "../components/LicensesDetails.vue";
import TheBottom from "../components/TheBottom.vue";

export default {
  name: "FooterLicensesView",
  components: {
    LicensesHero,
    CloudRow,
    LicensesDetails,
    TheBottom,
  },
};
</script>

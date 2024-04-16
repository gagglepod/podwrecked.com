<template>
  <UptimeHero />
  <CloudRow />
  <UptimeDetails />
  <TheCall />
</template>

<script>
import UptimeHero from "../components/UptimeHero.vue";
import CloudRow from "../components/CloudRow.vue";
import UptimeDetails from "../components/UptimeDetails.vue";
import TheCall from "../components/TheCall.vue";

export default {
  name: "UptimeView",
  components: {
    UptimeHero,
    CloudRow,
    UptimeDetails,
    TheCall,
  },
};
</script>

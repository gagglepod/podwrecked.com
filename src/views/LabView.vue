<template>
  <LabHero />
  <CloudRow />
  <LabDetails />
  <TheCall />
</template>

<script>
import LabHero from "../components/LabHero.vue";
import CloudRow from "../components/CloudRow.vue";
import LabDetails from "../components/LabDetails.vue";
import TheCall from "../components/TheCall.vue";

export default {
  name: "LabView",
  components: {
    LabHero,
    CloudRow,
    LabDetails,
    TheCall,
  },
};
</script>

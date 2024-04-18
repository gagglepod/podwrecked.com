<template>
  <LearnHero />
  <CloudRow />
  <LearnDetails />
  <TheCall />
</template>

<script>
import LearnHero from "../components/LearnHero.vue";
import CloudRow from "../components/CloudRow.vue";
import LearnDetails from "../components/LearnDetails.vue";
import TheCall from "../components/TheCall.vue";

export default {
  name: "LearnView",
  components: {
    LearnHero,
    CloudRow,
    LearnDetails,
    TheCall,
  },
};
</script>

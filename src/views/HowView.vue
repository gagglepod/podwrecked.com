<template>
  <HowHero />
  <CloudRow />
  <ShowCase />
  <HowsItBetter />
  <FeatureCards />
  <TheCall />
</template>

<script>
import HowHero from "../components/HowHero.vue";
import CloudRow from "../components/CloudRow.vue";
import ShowCase from "../components/ShowCase.vue";
import HowsItBetter from "../components/HowsItBetter.vue";
import FeatureCards from "../components/FeatureCards.vue";
import TheCall from "../components/TheCall.vue";

export default {
  name: "HowView",
  components: {
    HowHero,
    CloudRow,
    ShowCase,
    FeatureCards,
    HowsItBetter,
    TheCall,
  },
};
</script>

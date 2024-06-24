<template>
  <EpisodesHero />
  <CloudRow />
  <EpisodesList />
  <TheSpacer />
  <TheBottom />
</template>

<script>
import EpisodesHero from "../components/EpisodesHero.vue";
import CloudRow from "../components/CloudRow.vue";
import EpisodesList from "../components/EpisodesList.vue";
import TheSpacer from "../components/TheSpacer.vue";
import TheBottom from "../components/TheBottom.vue";

export default {
  name: "EpisodesView",
  components: {
    EpisodesHero,
    CloudRow,
    EpisodesList,
    TheSpacer,
    TheBottom,
  },
};
</script>

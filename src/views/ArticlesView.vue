<template>
  <ArticlesHero />
  <CloudRow />
  <ArticlesList />
  <TheSpacer />
  <TheBottom />
</template>

<script>
import ArticlesHero from "../components/ArticlesHero.vue";
import CloudRow from "../components/CloudRow.vue";
import ArticlesList from "../components/ArticlesList.vue";
import TheSpacer from "../components/TheSpacer.vue";
import TheBottom from "../components/TheBottom.vue";

export default {
  name: "ArticlesView",
  components: {
    ArticlesHero,
    CloudRow,
    ArticlesList,
    TheSpacer,
    TheBottom,
  },
};
</script>

<template>
  <IntroToPodDesignHero />
  <CloudRow />
  <IntroToPodDesignHome />
  <TheCall />
</template>

<script>
import IntroToPodDesignHero from "../../components/courses/IntroToPodDesignHero.vue";
import CloudRow from "../../components/CloudRow.vue";
import IntroToPodDesignHome from "../../components/courses/IntroToPodDesignHome.vue";
import TheCall from "../../components/TheCall.vue";

export default {
  name: "IntroToPodDesignHomeView",
  components: {
    IntroToPodDesignHero,
    CloudRow,
    IntroToPodDesignHome,
    TheCall,
  },
};
</script>

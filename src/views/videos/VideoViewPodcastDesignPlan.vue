<template>
  <VideoHeroPodcastDesignPlan />
  <CloudRow />
  <VideoDetailPodcastDesignPlan />
  <TheCall />
</template>

<script>
import VideoHeroPodcastDesignPlan from "../../components/videos/VideoHeroPodcastDesignPlan.vue";
import CloudRow from "../../components/CloudRow.vue";
import VideoDetailPodcastDesignPlan from "../../components/videos/VideoDetailPodcastDesignPlan.vue";
import TheCall from "../../components/TheCall.vue";

export default {
  name: "VideoViewPodcastDesignPlan",
  components: {
    VideoHeroPodcastDesignPlan,
    CloudRow,
    VideoDetailPodcastDesignPlan,
    TheCall,
  },
};
</script>

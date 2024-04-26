<template>
  <VideoHeroStopPodwrecking />
  <CloudRow />
  <VideoDetailStopPodwrecking />
  <TheCall />
</template>

<script>
import VideoHeroStopPodwrecking from "../../components/videos/VideoHeroStopPodwrecking.vue";
import CloudRow from "../../components/CloudRow.vue";
import VideoDetailStopPodwrecking from "../../components/videos/VideoDetailStopPodwrecking.vue";
import TheCall from "../../components/TheCall.vue";

export default {
  name: "VideoViewStopPodwrecking",
  components: {
    VideoHeroStopPodwrecking,
    CloudRow,
    VideoDetailStopPodwrecking,
    TheCall,
  },
};
</script>

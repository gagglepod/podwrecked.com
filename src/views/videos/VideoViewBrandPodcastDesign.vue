<template>
  <VideoHeroBrandPodcastDesign />
  <CloudRow />
  <VideoDetailBrandPodcastDesign />
  <TheCall />
</template>

<script>
import VideoHeroBrandPodcastDesign from "../../components/videos/VideoHeroBrandPodcastDesign.vue";
import CloudRow from "../../components/CloudRow.vue";
import VideoDetailBrandPodcastDesign from "../../components/videos/VideoDetailBrandPodcastDesign.vue";
import TheCall from "../../components/TheCall.vue";

export default {
  name: "VideoViewBrandPodcastDesign",
  components: {
    VideoHeroBrandPodcastDesign,
    CloudRow,
    VideoDetailBrandPodcastDesign,
    TheCall,
  },
};
</script>

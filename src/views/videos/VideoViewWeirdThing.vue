<template>
  <VideoHeroWeirdThing />
  <CloudRow />
  <VideoDetailWeirdThing />
  <TheCall />
</template>

<script>
import VideoHeroWeirdThing from "../../components/videos/VideoHeroWeirdThing.vue";
import CloudRow from "../../components/CloudRow.vue";
import VideoDetailWeirdThing from "../../components/videos/VideoDetailWeirdThing.vue";
import TheCall from "../../components/TheCall.vue";

export default {
  name: "VideoViewWeirdThing",
  components: {
    VideoHeroWeirdThing,
    CloudRow,
    VideoDetailWeirdThing,
    TheCall,
  },
};
</script>

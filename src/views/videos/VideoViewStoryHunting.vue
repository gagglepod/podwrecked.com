<template>
  <VideoHeroStoryHunting />
  <CloudRow />
  <VideoDetailStoryHunting />
  <TheCall />
</template>

<script>
import VideoHeroStoryHunting from "../../components/videos/VideoHeroStoryHunting.vue";
import CloudRow from "../../components/CloudRow.vue";
import VideoDetailStoryHunting from "../../components/videos/VideoDetailStoryHunting.vue";
import TheCall from "../../components/TheCall.vue";

export default {
  name: "VideoViewStoryHunting",
  components: {
    VideoHeroStoryHunting,
    CloudRow,
    VideoDetailStoryHunting,
    TheCall,
  },
};
</script>

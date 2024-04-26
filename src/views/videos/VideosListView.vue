<template>
  <VideoListHero />
  <CloudRow />
  <VideoList />
  <TheCall />
</template>

<script>
import VideoListHero from "../../components/videos/VideoListHero.vue";
import CloudRow from "../../components/CloudRow.vue";
import VideoList from "../../components/videos/VideoList.vue";
import TheCall from "../../components/TheCall.vue";

export default {
  name: "VideosListView",
  components: {
    VideoListHero,
    CloudRow,
    VideoList,
    TheCall,
  },
};
</script>

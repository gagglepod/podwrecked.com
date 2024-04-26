<template>
  <CourseHeroIntroToPodcastDesign />
  <CloudRow />
  <CourseDetailIntroToPodcastDesign />
  <TheCall />
</template>

<script>
import CourseHeroIntroToPodcastDesign from "../../components/courses/CourseHeroIntroToPodcastDesign.vue";
import CloudRow from "../../components/CloudRow.vue";
import CourseDetailIntroToPodcastDesign from "../../components/courses/CourseDetailIntroToPodcastDesign.vue";
import TheCall from "../../components/TheCall.vue";

export default {
  name: "CourseViewIntroToPodcastDesign",
  components: {
    CourseHeroIntroToPodcastDesign,
    CloudRow,
    CourseDetailIntroToPodcastDesign,
    TheCall,
  },
};
</script>

<template>
  <LessonHeroEpisodePlanningMasterclass />
  <CloudRow />
  <LessonDetailEpisodePlanningMasterclass01 />
  <TheCall />
</template>

<script>
import LessonHeroEpisodePlanningMasterclass from "../../components/courses/LessonHeroEpisodePlanningMasterclass.vue";
import CloudRow from "../../components/CloudRow.vue";
import LessonDetailEpisodePlanningMasterclass01 from "../../components/courses/LessonDetailEpisodePlanningMasterclass01.vue";
import TheCall from "../../components/TheCall.vue";

export default {
  name: "CourseViewEpisodePlanningMasterclass",
  components: {
    LessonHeroEpisodePlanningMasterclass,
    CloudRow,
    LessonDetailEpisodePlanningMasterclass01,
    TheCall,
  },
};
</script>

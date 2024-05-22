<template>
  <LessonHeroEpisodePlanningMasterclass />
  <CloudRow />
  <LessonDetailEpisodePlanningMasterclass03 />
  <TheCall />
</template>

<script>
import LessonHeroEpisodePlanningMasterclass from "../../components/courses/LessonHeroEpisodePlanningMasterclass.vue";
import CloudRow from "../../components/CloudRow.vue";
import LessonDetailEpisodePlanningMasterclass03 from "../../components/courses/LessonDetailEpisodePlanningMasterclass03.vue";
import TheCall from "../../components/TheCall.vue";

export default {
  name: "CourseViewEpisodePlanningMasterclass",
  components: {
    LessonHeroEpisodePlanningMasterclass,
    CloudRow,
    LessonDetailEpisodePlanningMasterclass03,
    TheCall,
  },
};
</script>

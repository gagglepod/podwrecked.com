<template>
  <LessonHeroEpisodePlanningMasterclass />
  <CloudRow />
  <LessonDetailEpisodePlanningMasterclass02 />
  <TheCall />
</template>

<script>
import LessonHeroEpisodePlanningMasterclass from "../../components/courses/LessonHeroEpisodePlanningMasterclass.vue";
import CloudRow from "../../components/CloudRow.vue";
import LessonDetailEpisodePlanningMasterclass02 from "../../components/courses/LessonDetailEpisodePlanningMasterclass02.vue";
import TheCall from "../../components/TheCall.vue";

export default {
  name: "CourseViewEpisodePlanningMasterclass",
  components: {
    LessonHeroEpisodePlanningMasterclass,
    CloudRow,
    LessonDetailEpisodePlanningMasterclass02,
    TheCall,
  },
};
</script>

<template>
  <LessonHeroEpisodePlanningMasterclass />
  <CloudRow />
  <LessonDetailEpisodePlanningMasterclass04 />
  <TheCall />
</template>

<script>
import LessonHeroEpisodePlanningMasterclass from "../../components/courses/LessonHeroEpisodePlanningMasterclass.vue";
import CloudRow from "../../components/CloudRow.vue";
import LessonDetailEpisodePlanningMasterclass04 from "../../components/courses/LessonDetailEpisodePlanningMasterclass04.vue";
import TheCall from "../../components/TheCall.vue";

export default {
  name: "CourseViewEpisodePlanningMasterclass",
  components: {
    LessonHeroEpisodePlanningMasterclass,
    CloudRow,
    LessonDetailEpisodePlanningMasterclass04,
    TheCall,
  },
};
</script>

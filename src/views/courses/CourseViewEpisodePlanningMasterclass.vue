<template>
  <CourseHeroEpisodePlanningMasterclass />
  <CloudRow />
  <CourseDetailEpisodePlanningMasterclass />
  <TheCall />
</template>

<script>
import CourseHeroEpisodePlanningMasterclass from "../../components/courses/CourseHeroEpisodePlanningMasterclass.vue";
import CloudRow from "../../components/CloudRow.vue";
import CourseDetailEpisodePlanningMasterclass from "../../components/courses/CourseDetailEpisodePlanningMasterclass.vue";
import TheCall from "../../components/TheCall.vue";

export default {
  name: "CourseViewEpisodePlanningMasterclass",
  components: {
    CourseHeroEpisodePlanningMasterclass,
    CloudRow,
    CourseDetailEpisodePlanningMasterclass,
    TheCall,
  },
};
</script>

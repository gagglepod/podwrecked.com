<template>
  <CourseListHero />
  <CloudRow />
  <CourseList />
  <TheCall />
</template>

<script>
import CourseListHero from "../../components/courses/CourseListHero.vue";
import CloudRow from "../../components/CloudRow.vue";
import CourseList from "../../components/courses/CourseList.vue";
import TheCall from "../../components/TheCall.vue";

export default {
  name: "CoursesListView",
  components: {
    CourseListHero,
    CloudRow,
    CourseList,
    TheCall,
  },
};
</script>

<template>
    <BlogHero />
    <CloudRow />
    <BlogList />
    <TheSpacer />
    <TheBottom />
</template>

<script>
import BlogHero from '../components/BlogHero.vue'
import CloudRow from '../components/CloudRow.vue'
import BlogList from '../components/BlogList.vue'
import TheSpacer from '../components/TheSpacer.vue'
import TheBottom from '../components/TheBottom.vue'

export default {
  name: 'BlogView',
  components: {  
    BlogHero,
    CloudRow,
    BlogList,
    TheSpacer,
    TheBottom
  }
}
</script>
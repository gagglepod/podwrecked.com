<template>
    <AboutHero />
    <CloudRow />
    <AboutDetails />
    <TheBottom />
</template>

<script>
import AboutHero from '../components/AboutHero.vue'
import CloudRow from '../components/CloudRow.vue'
import AboutDetails from '../components/AboutDetails.vue'
import TheBottom from '../components/TheBottom.vue'

export default {
  name: 'HowView',
  components: {  
    AboutHero,
    CloudRow,
    AboutDetails,
    TheBottom
  }
}
</script>
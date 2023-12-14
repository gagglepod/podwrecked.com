<template>
    <TheHero />
    <CloudRow />
    <TheDashboard />
    <TheBottom />
</template>

<script>
import TheHero from '../components/TheHero.vue'
import CloudRow from '../components/CloudRow.vue'
import TheDashboard from '../components/TheDashboard.vue'
import TheBottom from '../components/TheBottom.vue'

export default {
  name: 'HomeView',
  components: {  
    TheHero,
    CloudRow,
    TheDashboard,
    TheBottom
  }
}
</script>

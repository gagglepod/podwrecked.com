<template>
    <TheHero />
    <FeatureCards />
</template>

<script>
import TheHero from '../components/TheHero.vue'
import FeatureCards from '../components/FeatureCards.vue'

export default {
  name: 'HomeView',
  components: {  
    TheHero, 
    FeatureCards, 
  }
}
</script>

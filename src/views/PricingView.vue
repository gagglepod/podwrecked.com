<template>
    <PricingHero />
    <CloudRow />
    <PricingCards />
    <TheSpacer />
    <TheBottom />
</template>

<script>
import PricingHero from '../components/PricingHero.vue'
import CloudRow from '../components/CloudRow.vue'
import PricingCards from '../components/PricingCards.vue'
import TheSpacer from '../components/TheSpacer.vue'
import TheBottom from '../components/TheBottom.vue'

export default {
  name: 'HomeView',
  components: {  
    PricingHero,
    CloudRow, 
    PricingCards,
    TheSpacer,
    TheBottom
  }
}
</script>

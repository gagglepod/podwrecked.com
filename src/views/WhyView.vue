<template>
    <TheHero />
    <ShowCase />
    <TestimonialCards />
    <CalloutCards />
</template>

<script>
import TheHero from '../components/TheHero.vue'
import ShowCase from '../components/ShowCase.vue'
import TestimonialCards from '../components/TestimonialCards.vue'
import CalloutCards from '../components/CalloutCards.vue'

export default {
  name: 'WhyView',
  components: {  
    TheHero,
    ShowCase, 
    TestimonialCards, 
    CalloutCards
  }
}
</script>

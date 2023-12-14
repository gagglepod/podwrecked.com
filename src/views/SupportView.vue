<template>
    <SupportHero />
    <CloudRow />
    <SupportDetails />
</template>

<script>
import SupportHero from '../components/SupportHero.vue'
import CloudRow from '../components/CloudRow.vue'
import SupportDetails from '../components/SupportDetails.vue'

export default {
  name: 'HomeView',
  components: {  
    SupportHero, 
    CloudRow,
    SupportDetails,
  }
}
</script>

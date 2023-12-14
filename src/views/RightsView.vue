<template>
    <RightsHero />
    <CloudRow />
    <RightsDetails />
    <TheBottom />
</template>

<script>
import RightsHero from '../components/RightsHero.vue'
import CloudRow from '../components/CloudRow.vue'
import RightsDetails from '../components/RightsDetails.vue'
import TheBottom from '../components/TheBottom.vue'

export default {
  name: 'RightsView',
  components: {  
    RightsHero,
    CloudRow,
    RightsDetails,
    TheBottom
  }
}
</script>

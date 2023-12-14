<template>
    <TermsHero />
    <CloudRow />
    <TermsDetails />
    <TheBottom />
</template>

<script>
import TermsHero from '../components/TermsHero.vue'
import CloudRow from '../components/CloudRow.vue'
import TermsDetails from '../components/TermsDetails.vue'
import TheBottom from '../components/TheBottom.vue'

export default {
  name: 'TermsView',
  components: {  
    TermsHero,
    CloudRow,
    TermsDetails,
    TheBottom
  }
}
</script>

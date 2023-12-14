<template>
    <PageNotFoundHero />
    <CloudRow />
    <ShowCase />
</template>

<script>
import PageNotFoundHero from '../components/PageNotFoundHero.vue'
import CloudRow from '../components/CloudRow.vue'
import ShowCase from '../components/ShowCase.vue'


export default {
  name: 'PageNotFound',
  components: {  
    PageNotFoundHero,
    CloudRow,
    ShowCase
  }
}
</script>
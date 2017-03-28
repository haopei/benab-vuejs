<template>
  <div class="page page--home">

    <cog-partial></cog-partial>

    <section class="section">
        <div class="container">
            <h2>Our Impact</h2>
        </div>
    </section>

    <benab-get-involved></benab-get-involved>
    <sponsors-list :sponsors="sponsors"></sponsors-list>

  </div>
</template>

<script>

// Component Imports
import GetInvolved from './../components/GetInvolved.vue'
import SponsorsList from './../components/SponsorsList.vue'

// Data Imports
import { allSponsors } from './../data/sponsors.js'

export default {
  components: {
    BenabGetInvolved: GetInvolved,
    SponsorsList: SponsorsList
  },
  data() {
    return {
      sponsors: []
    }
  },
  mounted: function() {
    this.sponsors = allSponsors
  }
}
</script>

<style lang="scss">
</style>

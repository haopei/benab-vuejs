<template>
  <div class="page page--home">
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Empowering Youths</h1>
          <h2 class="subtitle">
            Large subtitle
          </h2>
        </div>
      </div>
    </section>

    <section class="section section-cog-2017 is-large">
      <div class="container">
        <div class="heading"><h1 class="title">Cognitive Initiative 2017</h1></div>
        <h2 class="subtitle">Leveling up students who are preparing for their 3rd Form Exams</h2>
      </div>
    </section>

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

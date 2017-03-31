<template>
  <div class="page page--home">
    <section class="section">
      <div class="container">
        <h1 class="title is-1">Mobilizing Youths For Good</h1>
        <h4 class="subtitle is-4">We are a small group of folks who identify education-related problems and solving them.</h4>
      </div>
    </section>
    <cog-partial></cog-partial>
    <get-involved></get-involved>
    <sponsors-list></sponsors-list>
  </div>
</template>

<script>

// Component Imports
import GetInvolved from './../components/GetInvolved.vue'
import SponsorsList from './../components/SponsorsList/SponsorsList.vue'

// Partial Imports
import CogPartial from './../components/CogPartial/CogPartial.vue'

export default {
  components: {
    GetInvolved,
    SponsorsList,
    CogPartial
  }
}
</script>

<style lang="scss">

</style>

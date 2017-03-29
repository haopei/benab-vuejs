<template>
  <div class="page page--home">

    <cog-partial></cog-partial>

    <!-- <section class="section">
        <div class="container">
            <h2>Our Impact</h2>
        </div>
    </section> -->

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

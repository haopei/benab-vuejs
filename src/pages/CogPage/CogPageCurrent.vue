<template>
    <div class="page page-cog-current">

    <section class="hero is-small is-primary has-text-centered background--cog-hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-spaced">
              <img src="/src/assets/images/cog-title-text.png" alt="">
              <br>
              <span style="font-size: 2rem;">July-August 2019</span>
          </h1>

          <h2 class="subtitle page-cog-2017__quirks--left-padding" style="margin: 3rem auto; max-width: 500px;">
              <p>Get involved in tutoring under-performing students in Mathematics and English Language</p>
          </h2>

          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc_byw1pLmhnePncCoUSNHqPMR37n2carx2WB64eaYolfqzpQ/viewform?usp=sf_link" class="button is-primary is-large">Sign Up As Volunteer Tutor</a>
        </div>
      </div>
    </section>    

    <section class="section page-cog-2017__overview">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-12">
                    <div class="heading">
                        <h2 class="title is-2">Overview</h2>
                    </div>
                    <p>Since 2013, we have connected with the schools, students, volunteers and sponsors to run our signature effort, The Cognitive Initiative. In this initiative, volunteer tutors attend class at Queen's College to level up Mathematics and English Language in students who are recruited from under-privileged or under-performing schools.</p>
                    <br>
                </div>
                <br>
                <div class="col-md-offset-1 col-md-6 col-sm-12">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Bh6PFNfveac" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </section>

    <section class="section page-cog-2017__overview">
        <div class="container">
            <div class="row">
                <div class="ol-sm-12">
                    <div class="heading">
                        <h2 class="title is-2">Why</h2>
                    </div>
                    <p>Mathematics and English are arguably the two core subjects which enable students to learn and grow more competently in other subject areas. </p>
                    <p>A student who is strong in these competencies are more likely to excel. Conversely, a student who is weak in these subjects may find difficulty growing in other areas.</p>
                    <p>We aim to use this bootcamp to inspire students to enjoy these subjects.</p>
                </div>                
            </div>
        </div>
    </section>    

    <cog-features-tabs></cog-features-tabs>
    <get-involved></get-involved>
    
    </div>

</template>

<script>

import CogFeaturesTabs from '@/src/components/CogFeaturesTab/CogFeaturesTabs.vue'
import GetInvolved from '@/src/components/GetInvolved/GetInvolved.vue'

export default {
    components: {
        CogFeaturesTabs, 
        GetInvolved
    },

    data() {
        return {
        }
    },
    mounted() {
    }
}
</script>

<style lang="scss">

</style>

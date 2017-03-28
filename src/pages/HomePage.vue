<template>
  <div class="page page--home">
    <section class="hero is-info is-large">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Large title</h1>
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

    <benab-get-involved></benab-get-involved>

    <section class="section is-medium">
      <div class="container">
        <div class="heading"><h1 class="title">Sponsors</h1></div>
        <h2 class="subtitle">Our gratitude to our sponsors who make it happen</h2>
      </div>
    </section>



    <div class="requirements">
        <ul>
            <li>Hero</li>
            <li>Cog2016</li>
            <li>Other Projects</li>
            <li>List of Sponsors</li>
            <li>Volunteers</li>
        </ul>
    </div>

  </div>
</template>

<script>
import GetInvolved from './../components/GetInvolved.vue'

export default {
  components: {
    BenabGetInvolved: GetInvolved
  }
}
</script>

<style lang="scss">
</style>

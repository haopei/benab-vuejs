<template lang="html">
  <div class="page--contact">
    <section class="hero is-primary is-medium is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Contact Us
          </h1>
          <h2 class="subtitle">
              We are always happy to connect with thinkers and doers.
          </h2>
        </div>
      </div>
    </section>

    <section class="section has-text-centered contact-bar">
      <div class="container">
        <div class="columns">
          <div class="column">
            <i class="fa fa-phone fa-fw fa-2x" aria-hidden="true"></i>
            <h4 class="subtitle is-4">(592) 654-3210</h4>
          </div>

          <div class="column">
            <i class="fa fa-envelope fa-fw fa-2x" aria-hidden="true"></i>
            <h4 class="subtitle is-4">thebenabfoundation@gmail.com</h4>
          </div>
        </div>
      </div>
    </section>

    <section class="section has-text-centered">
      <div class="container">
        <h6 class="title is-6">We are looking forward to meeting from you</h6>
        <img src="./static/team-gelling-600.jpg" alt="">
      </div>
    </section>

    <get-involved></get-involved>
  </div>


</template>

<script>
import GetInvolved from './../components/GetInvolved.vue'
export default {
  components: {
    GetInvolved
  }
}
</script>

<style lang="scss">
  .hero--contact-page {
    background-image: url('./static/team-gelling.jpg');
    background-size: cover;
  }

  .contact-bar {
    background: #f5f5f5;
  }
</style>

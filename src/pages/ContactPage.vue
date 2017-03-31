<template lang="html">
  <div class="page--contact">

    <section class="hero is-info is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Say Hello
          </h1>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="heading">
          <h2 class="title is-h2"></h2>
        </div>
        <h6 class="subtitle is-6">We are always happy to connect with thinkers and doers.</h6>

        <hr>

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
</style>

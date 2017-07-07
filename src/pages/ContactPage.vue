<template lang="html">
  <div class="page--contact">
    <section class="hero is-primary is-medium is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1 is-handwriting">
            Contact Us
          </h1>

        </div>
      </div>
    </section>

    <section class="section contact-bar">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h4 class="subtitle is-4">
                <img src="./static/team-gelling-600.jpg" alt="">
            </h4>
          </div>

          <div class="column">
            <h2 class="title is-2 is-handwriting">Looking forward to meeting you</h2>
            <hr>
            <h4 class="subtitle is-4"><i class="fa fa-envelope fa-fw fa-2x" aria-hidden="true"></i> thebenabfoundation@gmail.com</h4>
            <h4 class="subtitle is-4"><i class="fa fa-phone fa-fw fa-2x" aria-hidden="true"></i> (592) 654-3210</h4>
            <h4 class="subtitle is-4"><i class="fa fa-phone fa-fw fa-2x" aria-hidden="true"></i> (592) 613-0396</h4>
            <h4 class="subtitle is-4"><i class="fa fa-phone fa-fw fa-2x" aria-hidden="true"></i> (592) 655-1221</h4>
            <h4 class="subtitle is-4"><i class="fa fa-phone fa-fw fa-2x" aria-hidden="true"></i> (592) 617-3207</h4>
            <h4 class="subtitle is-4"><i class="fa fa-phone fa-fw fa-2x" aria-hidden="true"></i> (592) 628-8660</h4>
          </div>
        </div>
      </div>
    </section>

    <get-involved></get-involved>
  </div>


</template>

<script>
import GetInvolved from './../components/GetInvolved/GetInvolved.vue'
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

  .contact-bar .fa {
    line-height: 2rem;
  }
</style>

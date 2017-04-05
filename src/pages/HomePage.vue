<template>
  <div class="page page--home">
    <section class="section">
      <div class="container">
        <h1 class="title is-1">Mobilizing Youths For Good</h1>
        <h4 class="subtitle is-4">We are a small group of folks who identify education-related problems and solving them.</h4>
      </div>
    </section>
    <cog-partial></cog-partial>
    <section class="section media-coverage has-text-centered">
        <div class="container">
          <div class="heading">
            <h2 class="subtitle is-2">In The Media</h2>
          </div>

          <br><br>

          <div class="columns">
            <div class="column">
              <a href="http://demerarawaves.com/2015/07/07/benab-foundation-helping-to-improve-numeracy-literacy-in-several-city-schools/">
                <img src="./static/demerara-waves-logo.png" class="media-coverage__logo" alt="">
                <h4 class="subtitle is-4"><em>"Benab Foundation helping to improve numeracy, literacy in several City schools"</em></h4>
              </a>
            </div>

            <div class="column">
              <a href="https://guyanachronicle.com/2016/06/18/benab-foundation-rolls-out-literacy-prog-in-july">
                <img src="./static/chronicle-logo.png" class="media-coverage__logo" alt="">
                <h4 class="subtitle is-4">
                  <em>"Benab Foundation rolls out literacy programme in July"</em>
                </h4>
              </a>
            </div>

            <div class="column">
              <a href="http://guyanatimesgy.com/literacy-numeracy-classes-for-100-students-benab-foundation/">
                <img src="./static/guyana-times-logo.png" class="media-coverage__logo" alt="">
                <h4 class="subtitle is-4">
                  <em>"Literacy, numeracy classes for 100 students – Benab Foundation"</em>
                </h4>
              </a>
            </div>
          </div>
        </div>
    </section>
    <sponsors-list></sponsors-list>
    <get-involved></get-involved>

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

  .media-coverage {
    background: #f5f5f5;

    &__logo {
      height: 60px;
    }
  }

</style>

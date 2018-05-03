<template>
  <div class="page page--home">


    <!-- <section class="section has-text-centered is-fullheight intro">
      <div class="container">
        <img src="./../../assets/benab-logo.png" alt="">
        <br> <br>
        <h1 class="title is-1 is-handwriting is-spaced">Moving Education Forward</h1>
        <testimonial :image="require('./static/mkb.jpg')">
            <span slot="authorName">Jane Doe</span>
            <span slot="authorRole">Volunteer</span>
            <span slot="authorQuote">We are a small group of folks who identify education-related problems and solving them.</span>
        </testimonial>
        <router-link :to="{ name: 'AboutPage' }"><a class="button is-primary is-large">More About Us</a></router-link>
      </div>
    </section> -->

    <section class="hero intro is-medium hide">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <div class="has-text-centered">
                <img src="./../../assets/benab-logo.png" alt="">
                <p class="subtitle is-3 is-spaced">This is where the future lies: </p>
                <h1 class="title is-1 is-handwriting is-spaced">in the youth of today</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <cog-partial></cog-partial>

    <section class="section media-coverage has-text-centered">
        <div class="container">
          <h2 class="subtitle is-2 is-handwriting">In The Media!</h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Bh6PFNfveac" frameborder="0" allowfullscreen></iframe>
          <br>
          <br>
          <div class="columns">
            <div class="column">
              <a href="http://demerarawaves.com/2015/07/07/benab-foundation-helping-to-improve-numeracy-literacy-in-several-city-schools/">
                <img src="./../static/demerara-waves-logo.png" class="media-coverage__logo" alt="">
                <h6 class="subtitle is-6">
                  <em>"Benab Foundation helping to improve numeracy, literacy in several City schools"</em>
                </h6>
              </a>
            </div>

            <div class="column">
              <a href="https://guyanachronicle.com/2016/06/18/benab-foundation-rolls-out-literacy-prog-in-july">
                <img src="./../static/chronicle-logo.png" class="media-coverage__logo" alt="">
                <h6 class="subtitle is-6">
                  <em>"Benab Foundation rolls out literacy programme in July"</em>
                </h6>
              </a>
            </div>

            <div class="column">
              <a href="http://guyanatimesgy.com/literacy-numeracy-classes-for-100-students-benab-foundation/">
                <img src="./../static/guyana-times-logo.png" class="media-coverage__logo" alt="">
                <h6 class="subtitle is-6">
                  <em>"Literacy, numeracy classes for 100 students – Benab Foundation"</em>
                </h6>
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
import GetInvolved from './../../components/GetInvolved/GetInvolved.vue'
import SponsorsList from './../../components/SponsorsList/SponsorsList.vue'
import Testimonial from './../../components/Testimonial.vue';

// Partial Imports
import CogPartial from './../../components/CogPartial/CogPartial.vue'

export default {
  components: {
    GetInvolved,
    SponsorsList,
    Testimonial,
    CogPartial
  }
}
</script>

<style lang="scss">

  .intro {
    background: #cfcfaa;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #f5f5f5, #cccc90);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #f5f5f5, #cccc90); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .media-coverage {
    background: #f5f5f5;

    &__logo {
      height: 60px;
    }
  }

  .testimonial--sponsor {
    float: right;
  }

</style>

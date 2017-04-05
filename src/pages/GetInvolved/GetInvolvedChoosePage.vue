<template lang="html">

    <div class="get-involved-choose">
        <section class="hero hero--get-involved-choose is-large">
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-1 hero--get-involved-choose__title">
                <!-- Get Involved -->
              </h1>
              <h2 class="subtitle is-2 hero--get-involved-choose__subtitle">
                  <!-- Some inspirational sentence, or something. -->
              </h2>
            </div>
          </div>
        </section>

        <section class="section">
            <div class="container">
                <h1 class="title is-1">Get involved</h1>
            </div>
        </section>

        <section class="section">
            <div class="container">

                <div class="columns">
                    <div class="column">
                        <div class="box">
                            <h4 class="title is-spaced is-4">Volunteer</h4>
                            <img src="./static/2.jpg" alt="" class="is-fullwidth">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <br>
                            <router-link :to="{name: 'GetInvolvedVolunteerPage'}" class="button is-primary">Volunteer Now</router-link>
                        </div>
                    </div>

                    <div class="column">
                        <div class="box">
                            <h4 class="title is-spaced is-4">Donate</h4>
                            <img src="./static/3.jpg" alt="" class="is-fullwidth">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <br>
                            <router-link :to="{name: 'GetInvolvedSponsorsPage'}" class="button is-primary">Donate Now</router-link>
                        </div>
                    </div>

                    <div class="column">
                        <div class="box">
                            <h4 class="title is-spaced is-4">Join Our Team</h4>
                            <img src="./static/3.jpg" alt="" class="is-fullwidth">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <br>
                            <router-link :to="{name: 'GetInvolvedMembershipPage'}" class="button is-primary">Join Now</router-link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>

</template>

<script>
export default {
}
</script>

<style lang="scss">

.hero--get-involved-choose {
    background: url('./static/1.jpg') center/cover;

    &__title {
        color: #fff;
    }
    &__subtitle {
        color: #fff;
    }
}
</style>

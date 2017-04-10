<template lang="html">

    <div class="get-involved-choose">
        <section class="hero is-primary is-medium is-bold">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Get Involved
              </h1>
              <h2 class="subtitle">
                  Work together with us; we will transform education together.
              </h2>
            </div>
          </div>
        </section>

        <section class="section content-container">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <div class="box">
                            <h4 class="title is-spaced is-4">Volunteer</h4>
                            <img src="./static/GetInvolvedChoosePage/volunteer.jpg" alt="" class="is-fullwidth">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <br>
                            <router-link :to="{name: 'GetInvolvedVolunteerPage'}" class="button is-primary">Volunteer Now</router-link>
                        </div>
                    </div>

                    <div class="column">
                        <div class="box">
                            <h4 class="title is-spaced is-4">Donate</h4>
                            <img src="./static/GetInvolvedChoosePage/donate2.jpg" alt="" class="is-fullwidth">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <br>
                            <router-link :to="{name: 'GetInvolvedSponsorsPage'}" class="button is-primary">Donate Now</router-link>
                        </div>
                    </div>

                    <div class="column">
                        <div class="box">
                            <h4 class="title is-spaced is-4">Join Our Team</h4>
                            <img src="./static/GetInvolvedChoosePage/join-team.jpg" alt="" class="is-fullwidth">
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

<style lang="scss" scoped>

.hero {
    background: #f5f5f5;
}

.content-container {
    background: #4C86A8;
    background: -webkit-linear-gradient(to bottom, #ffffff , #dcdcdc);
    background: linear-gradient(to bottom, #ffffff , #dcdcdc)
}


</style>

<template lang="html">

    <div class="get-involved-choose">
        <section class="hero is-primary is-medium is-bold">
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-1 is-handwriting">
                Get Involved
              </h1>
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
                            <p>We welcome you to be a part of the annual Cognitive Initiative Tutoring Programme!</p>
                            <br>
                            <a href="https://form.jotformz.com/71105704463651" class="button is-primary" target="_blank">Volunter</a>
                        </div>
                    </div>

                    <div class="column">
                        <div class="box">
                            <h4 class="title is-spaced is-4">Donate</h4>
                            <img src="./static/GetInvolvedChoosePage/donate2.jpg" alt="" class="is-fullwidth">
                            <p>Your contributions are always welcome as we work together to help youths reach their potential! </p>
                            <br>
                            <router-link :to="{name: 'GetInvolvedSponsorsPage'}" class="button is-primary">Donate Now</router-link>
                        </div>
                    </div>

                    <div class="column">
                        <div class="box">
                            <h4 class="title is-spaced is-4">Join Our Team</h4>
                            <img src="./static/GetInvolvedChoosePage/join-team.jpg" alt="" class="is-fullwidth">
                            <p>As we continue to grow, we are excited to welcome new members to our family!</p>
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

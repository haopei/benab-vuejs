<template lang="html">

    <div class="get-involved-choose">
        <section class="hero is-medium is-primary is-bold">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Get Involved
              </h1>
              <h2 class="subtitle">
                  Some inspirational sentence, or something.
              </h2>
            </div>
          </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <h4 class="subtitle is-4">Volunteer</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <br>
                        <router-link :to="{name: 'GetInvolvedVolunteerPage'}" class="button is-primary">Volunteer Now</router-link>
                    </div>
                    <div class="column">
                        <h4 class="subtitle is-4">Donate</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <br>
                        <router-link :to="{name: 'GetInvolvedSponsorsPage'}" class="button is-primary">Donate Now</router-link>
                    </div>
                    <div class="column">
                        <h4 class="subtitle is-4">Join Our Team</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <br>
                        <router-link :to="{name: 'GetInvolvedMembershipPage'}" class="button is-primary">Join Now</router-link>
                    </div>
                </div>
            </div>
        </section>

        <div class="requirements">
            <ul>
                <li>Hero</li>
                <li>Short paragraph to entice involvement</li>
                <li>Link three ways to get involved: volunteering, sponsorship, membership</li>
            </ul>
        </div>
    </div>

</template>

<script>
export default {
}
</script>

<style lang="css">
</style>

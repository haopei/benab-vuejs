<template lang="html">

    <section class="section partial--get-involved">
      <div class="container">
        <div class="heading"><h2 class="title is-2">Get Involved</h2></div>
        <hr>
        <div class="columns">
            <div class="column">
                <h5 class="subtitle is-5">Volunteer for Cognitive Initiative</h5>
                <img :src="require('./static/volunteer.jpg')" alt="">
                <!-- <p class="small">It will be the one of the most rewarding experiences in your life</p> -->
                <br>
                <a href="https://form.jotformz.com/71105704463651" class="button is-primary is-outlined is-inverted" target="_blank">Volunter</a>
                <!-- <router-link :to="{name: 'GetInvolvedVolunteerPage'}" class="button is-primary is-outlined is-inverted">Volunteer</router-link> -->
            </div>
            <div class="column">
                <h5 class="subtitle is-5">Become a Sponsor</h5>
                <img :src="require('./static/donate2.jpg')" alt="">
                <!-- <p class="small">It will be the one of the most rewarding experiences in your life</p> -->
                <br>
                <router-link :to="{name: 'GetInvolvedSponsorsPage'}" class="button is-primary is-outlined is-inverted">Donate</router-link>
            </div>
            <div class="column">
                <h5 class="subtitle is-5">Join Our Team</h5>
                <img :src="require('./static/team-gelling.jpg')" alt="">
                <!-- <p class="small">It will be the one of the most rewarding experiences in your life</p> -->
                <br>
                <router-link :to="{name: 'GetInvolvedMembershipPage'}" class="button is-primary is-outlined is-inverted">Join Our Team</router-link>
            </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.partial--get-involved {
    background: #282c37;
    color: #fff;
}

.title, .subtitle, p {
    color: #fff;
}

p {
    opacity: 0.9;
}
</style>

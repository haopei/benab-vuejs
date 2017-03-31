<template lang="html">
    <section class="section partial--get-involved">
      <div class="container">
        <div class="heading"><h2 class="title is-2">Get Involved</h2></div>
        <h6 class="subtitle is-h6">Be part of the magic</h6>
        [use tabs for this]
        <hr>
        <div class="columns">
            <div class="column">
                <h4 class="subtitle is-4">Become a Volunteer</h4>
                <img :src="require('./../assets/collage.jpg')" alt="">
                <!-- <p class="small">It will be the one of the most rewarding experiences in your life</p> -->
                <br>
                <router-link :to="{name: 'VolunteerPage'}" class="button is-primary is-outlined is-inverted">Volunteer</router-link>
            </div>
            <div class="column">
                <h4 class="subtitle is-4">Become a Sponsor</h4>
                <img :src="require('./../assets/collage.jpg')" alt="">
                <!-- <p class="small">It will be the one of the most rewarding experiences in your life</p> -->
                <br>
                <router-link :to="{name: 'SponsorPage'}" class="button is-primary is-outlined is-inverted">Sponsor Our Initiatives</router-link>
            </div>
            <div class="column">
                <h4 class="subtitle is-4">Join Our Team</h4>
                <img :src="require('./../assets/collage.jpg')" alt="">
                <!-- <p class="small">It will be the one of the most rewarding experiences in your life</p> -->
                <br>
                <router-link :to="{name: 'MembershipPage'}" class="button is-primary is-outlined is-inverted">Join Our Team</router-link>
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

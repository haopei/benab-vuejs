<template>
    <div class="page page-cog-2017">
        <h4>Cog 2017</h4>

        <section class="hero is-medium is-primary is-bold">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Cognitive Initiative 2017
              </h1>
              <h2 class="subtitle">
                Some short description
              </h2>
            </div>
          </div>
        </section>

        <section class="section">
            <div class="container">
                <h2 class="title">Overview</h2>
                <div class="content">
                    <p>Brief introduction to the benab foundation</p>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <h4 class="title is-4">Queen's College</h4>
                        <p>Say something about this</p>
                    </div>
                    <div class="column">
                        <h4 class="title is-4">Tailored Curriculum</h4>
                        <p>Also say something about this</p>
                    </div>
                    <div class="column">
                        <h4 class="title is-4">Top Performing Volunteers</h4>
                        <p>And finally, say something like this</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <h2 class="title">Gallery</h2>
                [insert gallery here]
            </div>

        </section>

        <sponsors-list :sponsors="allSponsors"></sponsors-list>

        <div class="requirements">
            <ul>
                <li>Hero</li>
                <li>overview</li>
                <li>Enetworks Video</li>
                <li>Stats</li>
                <li>sponsors</li>
                <li>Volunteer</li>
            </ul>
        </div>
    </div>
</template>

<script>

import SponsorsList from './../components/SponsorsList.vue'
import { allSponsors } from './../data/sponsors.js'

export default {
    components: {
        SponsorsList
    },
    data() {
        return {
            allSponsors: []
        }
    },
    mounted: function() {
        this.allSponsors = allSponsors
    }

}
</script>

<style lang="scss">
</style>

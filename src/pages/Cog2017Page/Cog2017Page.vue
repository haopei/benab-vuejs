<template>
    <div class="page page-cog-2017">

        <section class="hero is-medium is-primary background--cog-hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-spaced">
                  <img src="./cog-title-text.png" alt="">
              </h1>
              <h2 class="subtitle">
                 Leveling up Mathematics and English Language in underperforming students
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

        <strong>Elements of focus: queens college, partitioned students based on level, one-on-one focus</strong>

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

import SponsorsList from './../../components/SponsorsList.vue'
import { allSponsors } from './../../data/sponsors.data.js'

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
        this.allSponsors = allSponsors;
    }
}
</script>

<style lang="scss">
.background--cog-hero {
    background: #4C86A8; /* fallback for old browsers */
    background: -webkit-linear-gradient(141deg, #4C86A8 , #AF9164); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(-135deg, #4C86A8 , #AF9164); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>

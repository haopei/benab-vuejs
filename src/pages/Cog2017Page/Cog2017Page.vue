<template>
    <div class="page page-cog-2017">

        <section class="hero is-medium is-primary background--cog-hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-spaced">
                  <img src="./cog-title-text.png" alt="">
              </h1>
              <h2 class="subtitle">
                  <h2>Make this carnival and education</h2>
                 Leveling up Mathematics and English Language in underperforming students <br>
                 <ul>
                     <li>photos of year 1, 2, 3, 4</li>
                     <li>estimation of improvements</li>
                     <li>honorable mentions (special thank yous)</li>
                     <li>Donors per year</li>
                 </ul>
                 <br>
                 <ul>
                    <h2>Thank you page</h2>
                     <li>Jennifer Cumberbach: big supporter </li>
                     <li>carryl: loyal sponsor</li>
                     <li>Volunteers</li>
                     <li>Churches</li>
                 </ul>
              </h2>
            </div>
          </div>
        </section>

        <section class="section">
            <div class="container">

                <div class="content">
                    <div class="columns">
                        <div class="column">
                            <h2 class="title">Overview</h2>
                            <p>Since 2013 [citation required], we have connected with the schools, students, volunteers and sponsors to run our signature effort, The Cognitive Initiative. In this initiative, volunteer tutors (screened to be top CSEC performers either recently or in the past) attend class at Queen's College to level up Mathematics and English Language in students who are recruited from under-privileged or under-performing schools.</p>
                        </div>
                        <div class="column">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Bh6PFNfveac" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>

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

        <sponsors-list></sponsors-list>

    </div>
</template>

<script>

import SponsorsList from './../../components/SponsorsList/SponsorsList.vue'

export default {
    components: {
        SponsorsList
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

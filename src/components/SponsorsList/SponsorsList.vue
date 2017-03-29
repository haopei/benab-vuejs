<template lang="html">
    <section class="section is-medium">
      <div class="container">
          <h2 class="subtitle is-2">Sponsors</h2>
          <div class="sponsor-list-by-year-container">

              <hr>

              <div class="sponsor-list--by-year">
                  <div class="columns">
                      <div class="column is-2">
                          <h4 class="subtitle is-4">2017</h4>
                      </div>
                      <div class="column">
                          <div class="columns">
                              <div v-for="sponsor in cogSponsors2017" class="sponsor-item column">
                                  <img :src="sponsor.image" :alt="sponsor.name">
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <hr>

              <div class="sponsor-list--by-year">
                  <div class="columns">
                      <div class="column is-2">
                          <h4 class="subtitle is-4">2016</h4>
                      </div>
                      <div class="column">
                          <div class="columns">
                              <div v-for="sponsor in cogSponsors2016" class="sponsor-item column">
                                  <img :src="sponsor.image" :alt="sponsor.name">
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <hr>

              <div class="sponsor-list--by-year">
                  <div class="columns">
                      <div class="column is-2">
                          <h4 class="subtitle is-4">2015</h4>
                      </div>
                      <div class="column">
                          <div class="columns">
                              <div v-for="sponsor in cogSponsors2015" class="sponsor-item column">
                                  <img :src="sponsor.image" :alt="sponsor.name">
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <hr>

              <div class="sponsor-list--by-year">
                  <div class="columns">
                      <div class="column is-2">
                          <h4 class="subtitle is-4">2014</h4>
                      </div>
                      <div class="column">
                          <div class="columns">
                              <div v-for="sponsor in cogSponsors2014" class="sponsor-item column">
                                  <img :src="sponsor.image" :alt="sponsor.name">
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <hr>

              <div class="sponsor-list--by-year">
                  <div class="columns">
                      <div class="column is-2">
                          <h4 class="subtitle is-4">2013</h4>
                      </div>
                      <div class="column">
                          <div class="columns">
                              <div v-for="sponsor in cogSponsors2013" class="sponsor-item column">
                                  <img :src="sponsor.image" :alt="sponsor.name">
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <hr>
          </div>
      </div>
    </section>
</template>

<script>
import { allCogSponsors  } from './sponsors.data.js'
export default {
    data() {
        return {
            cogSponsors2013: [],
            cogSponsors2014: [],
            cogSponsors2015: [],
            cogSponsors2016: [],
            cogSponsors2017: []
        }
    },
    mounted: function() {
        this.cogSponsors2013 = allCogSponsors.year2013;
        this.cogSponsors2014 = allCogSponsors.year2014;
        this.cogSponsors2015 = allCogSponsors.year2015;
        this.cogSponsors2016 = allCogSponsors.year2016;
        this.cogSponsors2017 = allCogSponsors.year2017;
    }
}
</script>

<style lang="scss" scoped>
    h4 {
        padding: 3.5rem 0;
        font-size: 2rem;
    }
</style>

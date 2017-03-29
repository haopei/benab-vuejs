<template lang="html">
    <section class="section is-medium">
      <div class="container">
          <h2 class="subtitle is-2">Sponsors</h2>
          <div class="sponsor-list-by-year">
              <h4 class="subtitle is-4">2017</h4>
              {{cogSponsors2017}}
          </div>
          <div class="sponsor-list-by-year">
              <h4 class="subtitle is-4">2016</h4>
              {{cogSponsors2016}}
          </div>
          <div class="sponsor-list-by-year">
              <h4 class="subtitle is-4">2015</h4>
              {{cogSponsors2015}}
          </div>
          <div class="sponsor-list-by-year">
              <h4 class="subtitle is-4">2014</h4>
              {{cogSponsors2014}}
          </div>
          <div class="sponsor-list-by-year">
              <h4 class="subtitle is-4">2013</h4>
              {{cogSponsors2013}}
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

<style lang="css">
</style>

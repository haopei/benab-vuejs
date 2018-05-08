<template>
    <div class="page page-cog-2017">

        <section class="hero is-medium is-primary has-text-centered background--cog-hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-spaced">
                  <img src="./static/cog-title-text.png" alt="">
              </h1>
              <h2 class="subtitle page-cog-2017__quirks--left-padding">
                  <small>
                      Guyana's CSEC pass-rates for Mathematics and English are poor. <br>
                      The Cognitive Initiative tackles this problem by recruiting top CSEC <br>
                      performers to teach students who are at-risk of failing.
                  </small>
              </h2>
            
              <a href="https://form.jotformz.com/71105704463651" target="_blank" class="button is-primary is-large">Volunteer</a>
                <div class="cog-hero__start-date">
                    <div>Starts July 2018</div>
                </div>  
            </div>
          </div>
        </section>

        <div class="section section__schedule">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <h1 class="title is-1">2018 Schedule</h1>
                        <ul>
                            <p><strong>Start Date:</strong> 16th July, 2018</p>
                            <p><strong>Closing Ceremony:</strong> 17th August, 2018</p>
                            <p><strong>Venue:</strong> Queen's College</p>
                            <p><strong>Tutoring Time:</strong> 9:30 AM - 1:30 PM</p>
                        </ul>
                    </div>
                    <div class="col-sm-8">
                        <img src="./static/2017-pics/2017-1.jpg" alt="">
                        <img src="./static/2017-pics/2017-2.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>

        <section class="section page-cog-2017__overview">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-12">
                        <div class="heading">
                            <h2 class="title is-2">Overview</h2>
                        </div>
                        <p>Since 2013, we have connected with the schools, students, volunteers and sponsors to run our signature effort, The Cognitive Initiative. In this initiative, volunteer tutors attend class at Queen's College to level up Mathematics and English Language in students who are recruited from under-privileged or under-performing schools.</p>
                        <br>
                    </div>
                    <br>
                    <div class="col-md-offset-1 col-md-6 col-sm-12">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Bh6PFNfveac" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>

        <section>

        </section>


        <cog-features-tabs></cog-features-tabs>


        <section class="section page-cog-2017__venue">
            <div class="qc-venue white-text-section">
                <h2 class="title is-2 text--white tinted-label">Students learn leadership, health and discipline</h2>
            </div>
        </section>

        <cog-volunteers></cog-volunteers>

        <sponsors-list></sponsors-list>

        <section class="section">
          <div class="container">
            <div class="heading">
              <h2 class="title is-2">Individual Contributors</h2>
            </div>
            <hr>
            <div class="content">
              <ul>
                <li><strong>Mr. Robert Carryl</strong> for contributed to our fundraising efforts, every time.</li>
                <li><strong>Mr. Robert Mansell</strong> for his kind monetary contribution to the Cognitive Initiative 2016</li>

                <li><strong>Mrs. Jennifer Cumberbach</strong> who connected us to the right people at the right time.</li>
              </ul>
            </div>
          </div>
        </section>

        <get-involved></get-involved>

    </div>
</template>

<script>

import SponsorsList from './../../components/SponsorsList/SponsorsList.vue'
import GetInvolved from './../../components/GetInvolved/GetInvolved.vue'
import { galleryImages } from './data.js'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import CogFeaturesTabs from './CogFeaturesTabs.vue'
import CogVolunteers from './CogVolunteers/CogVolunteers.vue'

export default {
    components: {
        CogFeaturesTabs,
        CogVolunteers,
        GetInvolved,
        SponsorsList,
        swiper,
        swiperSlide
    },
    data() {
        return {
            galleryImages: [],
            swiperOptions: {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 'auto',
                spaceBetween: 10,
                freeMode: true,
                parallax: true,
                speed: 600,
            }
        }
    },
    mounted() {
        this.galleryImages = galleryImages;
    }
}
</script>

<style lang="scss">

.page-cog-2017 {
    &__hero {
        background: url('./static/chalkboard.jpg') center/cover;
        // background: #4C86A8; /* fallback for old browsers */
        // background: -webkit-linear-gradient(141deg, #4C86A8 , #AF9164); /* Chrome 10-25, Safari 5.1-6 */
        // background: linear-gradient(-135deg, #4C86A8 , #AF9164); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }

    &__quirks {
        &--left-padding {
            padding-left: 1rem;
        }
    }

    &__overview {
        background: #f5f5f5;
        // background: #E0EAFC; /* fallback for old browsers */
        // background: -webkit-linear-gradient(to left, #E0EAFC , #CFDEF3); /* Chrome 10-25, Safari 5.1-6 */
        // background: linear-gradient(to bottom, #E0EAFC , #CFDEF3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

    &__venue {
        background: url('./static/21.jpg') center/cover;
        padding: 20rem 0;
    }
}

.section__schedule {
    background: #946340;
    color: #fff;
}

.tinted-label {
    background: #222;
    display: inline-block;
    opacity: 0.8;
    padding: 1rem;

    &--is-secondary {
        padding: 0.5rem;
    }
}

.qc-venue {
    padding: 1rem;
    text-align: center;

    color: #fff;

}

// .qc-venue * {
//     color: #fff;
// }

.swiper-slide {
  width: 80%;
}
.swiper-slide:nth-child(2n) {
  width: 60%;
}
.swiper-slide:nth-child(3n) {
  width: 40%;
}
</style>

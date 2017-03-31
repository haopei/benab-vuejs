<template>
    <div class="page page-cog-2017">

        <section class="hero is-medium is-primary background--cog-hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-spaced">
                  <img src="./static/cog-title-text.png" alt="">
              </h1>
              <h2 class="subtitle page-cog-2017__quirks--left-padding">
                  <small>
                      Every year, since 2013, we recruit 30 top-performing volunteers <br> to teach Mathematics and English to 100 students <br> from under-performing schools.
                  </small>
              </h2>
            </div>
          </div>
        </section>

        <section class="section page-cog-2017__overview">
            <div class="container">
                <div class="content">
                    <div class="columns">
                        <div class="column">
                            <div class="heading">
                                <h2 class="title is-2">Overview</h2>
                            </div>

                            <p>Since 2013 [citation required], we have connected with the schools, students, volunteers and sponsors to run our signature effort, The Cognitive Initiative. In this initiative, volunteer tutors (screened to be top CSEC performers either recently or in the past) attend class at Queen's College to level up Mathematics and English Language in students who are recruited from under-privileged or under-performing schools.</p>
                        </div>
                        <div class="column">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Bh6PFNfveac" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <cog-features-tabs></cog-features-tabs>
        <get-involved></get-involved>


        <section class="section page-cog-2017__students">
            <div class="container">
                <h2 class="title">Needs of the initiative</h2>
                <h4 class="subtitle is-h4">[This is a checklist of things we need]</h4>
                <div class="columns">
                    <div class="column">
                        <ul>
                            <li>360 meals for ~120 students for 30 days.</li>
                            <li>Water and drinks for 30 days</li>
                            <li>Some other thing</li>
                            <li>Some other thing</li>
                        </ul>
                    </div>

                    <div class="column">
                        <ul>
                            <li>30 Volunteer Tutors</li>
                            <li>Some other thing</li>
                            <li>Some other thing</li>
                            <li>Some other thing</li>
                        </ul>
                    </div>

                    <div class="column">
                        <ul>
                            <li>Some other thing</li>
                            <li>Some other thing</li>
                            <li>Some other thing</li>
                            <li>Some other thing</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>

        <section class="section">
            <div class="container-fluid">
                <h2 class="title">Gallery</h2>
                <swiper :options="swiperOptions">
                    <swiper-slide v-for="image in galleryImages" :key="image.src">
                        <img :src="image.src" alt="" width="300" height="300">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
        </section>

        <sponsors-list></sponsors-list>
        <get-involved></get-involved>

    </div>
</template>

<script>

import SponsorsList from './../../components/SponsorsList/SponsorsList.vue'
import GetInvolved from './../../components/GetInvolved.vue'
import { galleryImages } from './data.js'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import CogFeaturesTabs from './CogFeaturesTabs.vue'

export default {
    components: {
        CogFeaturesTabs,
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
        background: #4C86A8; /* fallback for old browsers */
        background: -webkit-linear-gradient(141deg, #4C86A8 , #AF9164); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(-135deg, #4C86A8 , #AF9164); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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

    &__students {

    }
}

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

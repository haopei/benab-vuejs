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
                      Guyana's CSEC pass-rates for Mathematics and English are poor. <br>
                      The Cognitive Initiative tackles this problem by recruiting top CSEC <br>
                      performers to teach students who are at-risk of failing.
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

        <section class="section">
            <div class="container">
                <cog-features-tabs></cog-features-tabs>
            </div>
        </section>

        <section class="section page-cog-2017__venue">
            <div class="container">
                <div class="columns">
                    <div class="column is-one-quarter">
                        <img src="./static/qc-crest.png" width="150" alt="">
                    </div>
                    <div class="column">
                        <div class="content">
                            <div class="heading">
                                <h4 class="title is-4">Venue: Queen's College</h4>
                            </div>
                            <p>Students of five schools are placed in one of Guyana's top learning facilities they will learn together.</p>
                        </div>

                    </div>

                </div>

            </div>

        </section>

        <!-- <section class="section">
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
        </section> -->

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

    &__venue {
        background: #f5f5f5;
        background: -webkit-linear-gradient(to right, #fff, #dede28);
        background: linear-gradient(to right, #fff, #dede28);
        border-top:: 1px solid #3c2511;
        border-bottom: 1px solid #3c2511;
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

<template lang="html">
    <section class="section is-medium">
      <div class="container">
        <h1 class="title">Sponsors</h1>
        <h3 class="subtitle">Our gratitude to our sponsors who make it happen</h3>
        <pre>{{ sponsors }}</pre>
      </div>

      <testimonial v-for="t in testimonials" :testimonial="t" :key="t.name"></testimonial>
    </section>
</template>

<script>
import Testimonial from './Testimonial.vue'
import { featuredSponsorshipTestimonial } from './../data/testimonials.data.js'

export default {
    components: {
        Testimonial
    },
    props: ['sponsors'],
    data() {
        return {
            testimonials: []
        }
    },
    mounted: function() {
        this.testimonials = featuredSponsorshipTestimonial;
    }
}
</script>

<style lang="css">
</style>

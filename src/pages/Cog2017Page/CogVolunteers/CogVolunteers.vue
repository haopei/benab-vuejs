<template lang="html">
<div class="">
    <section class="section cog-volunteerTestimonials">
        <div class="container">
        <testimonial
            v-for="vol in volunteerTestimonials"
            :image="vol.image"
            :key="vol.quote"
            class="cog-volunteerTestimonials__item">
            <span slot="authorName">{{vol.name}}</span>
            <span slot="authorQuote">{{vol.quote}}</span>
            <span slot="authorRole">{{vol.role}}</span>
        </testimonial>
        </div>
    </section>
</div>
</template>

<script>

/**
 * README
 * This component renders a list of <Testimonials /> (from volunteerTestimonials) involved in the Cognitive Initiative.
 * Data for each testimonial is hard-coded and retrieved
 */

import Testimonial from './../../../components/Testimonial.vue';

const volunteerTestimonials = [
    {name: 'Saevion', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Saevion', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Saevion', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Saevion', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Saevion', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Saevion', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Saevion', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Saevion', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Saevion', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Saevion', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
]

export default {
    components: {
        Testimonial
    },
    data() {
        return {
            volunteerTestimonials: []
        }
    },
    mounted() {
        this.volunteerTestimonials = volunteerTestimonials
    }

}
</script>

<style lang="scss">


.cog-volunteerTestimonials {
    overflow: hidden;

    &__item {
        float: left;
        width: 20%;
        margin: 10px 0
    }
}
</style>

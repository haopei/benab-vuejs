<template lang="html">
<div class="">
    <section class="section cog-volunteers">
        <div class="container">
        <testimonial
            v-for="vol in volunteers"
            :image="vol.image"
            :key="vol.quote"
            class="cog-volunteers__item">
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
 * This component renders a list of <Testimonials /> (from volunteers) involved in the Cognitive Initiative.
 * Data for each testimonial is hard-coded and retrieved
 */

import Testimonial from './../../../components/Testimonial.vue';

const volunteers = [
    {name: 'Saevion', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something'},
    {name: 'Saevion', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something'},
    {name: 'Saevion', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something'},
    {name: 'Saevion', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something'},
    {name: 'Saevion', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something'},
    {name: 'Saevion', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something'},
    {name: 'Saevion', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something'},
    {name: 'Saevion', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something'},
    {name: 'Saevion', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something'},
    {name: 'Saevion', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something'},
]

export default {
    components: {
        Testimonial
    },
    data() {
        return {
            volunteers: []
        }
    },
    mounted() {
        this.volunteers = volunteers
    }

}
</script>

<style lang="scss">


.cog-volunteers {
    overflow: hidden;

    &__item {
        float: left;
        width: 20%;
        margin: 10px 0
    }
}
</style>

<template lang="html">
    <section class="section section__volunteers">
        <div class="container-fluid">
            <div class="heading has-text-centered">
                <h2 class="title is-h2">Thank You, Volunteers!</h2>
                <br>
            </div>
            <div class="volunteers-list">
                    <volunteers-list :volunteers="volunteers"></volunteers-list>
            </div>
        </div>
    </section>
</template>

<script>

/**
 * README
 * This component renders a list of <Volunteer /> involved in the Cognitive Initiative.
 */

// import Testimonial from './../../../components/Testimonial.vue';
import VolunteersList from './../../../components/VolunteersList/VolunteersList.vue';

const volunteers = [
    {name: 'Delight', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Saevion', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Maryam', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Suraiya', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Maria', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Reshmi', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Maria', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Krystal', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Larry', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Benita', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Delight', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Saevion', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Maryam', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Suraiya', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Maria', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Reshmi', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Maria', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Krystal', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Larry', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Benita', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Delight', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Saevion', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Maryam', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Suraiya', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Maria', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Reshmi', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Maria', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Krystal', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Larry', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false},
    {name: 'Benita', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.jpg'), quote: 'something', isActive: false}
]

export default {
    components: {
        VolunteersList
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
    .section__volunteers {
        background: #f6fcff;
        max-height: 600px;
        overflow-y: scroll;
    }

</style>

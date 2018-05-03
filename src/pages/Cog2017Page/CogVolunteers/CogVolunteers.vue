<template lang="html">
    <section class="section section__volunteers">
        <div class="container-fluid">
            <div class="heading has-text-centered">
                <h2 class="title is-2 is-handwriting">Thank You, 2016 Volunteers!</h2>
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
    {name: 'Benita Davis', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.png'), quote: 'something', isActive: false},
    {name: 'Chelsea Frank', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.png'), quote: 'something', isActive: false},
    {name: 'Curtly Frank', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.png'), quote: 'something', isActive: false},
    {name: 'Daniella Sobers', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.png'), quote: 'something', isActive: false},
    {name: 'Haopei Yang', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.png'), quote: 'something', isActive: false},
    {name: 'Joel Trotman', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.png'), quote: 'something', isActive: false},
    {name: 'Jonelle Europe', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.png'), quote: 'something', isActive: false},
    {name: 'Kezia Campbell', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.png'), quote: 'something', isActive: false},
    {name: 'Krystal Sukra', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.png'), quote: 'something', isActive: false},
    {name: 'Larry Carryl', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.png'), quote: 'something', isActive: false},
    {name: 'Maria Singh', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.png'), quote: 'something', isActive: false},
    {name: 'Maryam K. Bacchus', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.png'), quote: 'something', isActive: false},
    {name: 'Nathifa Victorine', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.png'), quote: 'something', isActive: false},
    {name: 'Reashmi Nauth', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.png'), quote: 'something', isActive: false},
    {name: 'Saevion David-Longe', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.png'), quote: 'something', isActive: false},
    {name: 'Safiya Victorine', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.png'), quote: 'something', isActive: false},
    {name: 'Sherrie Hewitt', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.png'), quote: 'something', isActive: false},
    {name: 'Tamara Williams', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.png'), quote: 'something', isActive: false},
    {name: 'Crystal Griffith', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.png'), quote: 'something', isActive: false},
    {name: 'Mohini Narayan', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.png'), quote: 'something', isActive: false},
    {name: 'Iyanna Butts', role: 'Volunteer', image: require('./static/volunteer-thumbnails/saevion-thumb.png'), quote: 'something', isActive: false}
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

<template lang="html">
    <section class="section partial background--cog-hero has-text-centered is-large">
        <div class="container">
            <img src="./cog-title-text.png" alt="">
            <h2 class="subtitle">Leveling up students who are preparing for their 3rd Form Exams</h2>
            <router-link :to="{ name: 'Cog2017Page' }"><a class="button is-primary is-large">Learn More</a></router-link> <br>
            <div class="padded-space"></div>
            <button v-if="!showInvolvementOptions" class="button is-link" @click="handleClick">Get Involved</button>
            <transition>
            <div v-if="showInvolvementOptions" class="involvement-options">
                <router-link :to="{ name: 'Cog2017Page' }"><a class="button is-primary is-inverted">Volunteer Tutor</a></router-link>
                <router-link :to="{ name: 'Cog2017Page' }"><a class="button is-primary is-inverted">Donate</a></router-link>
                <router-link :to="{ name: 'Cog2017Page' }"><a class="button is-primary is-inverted">Join Team</a></router-link>
            </div>
            </transition>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            showInvolvementOptions: false
        }
    },
    methods: {
        handleClick(e) {
            this.showInvolvementOptions = true;
        }
    }
}
</script>

<style lang="scss">
.background--cog-hero {
    background: #4C86A8; /* fallback for old browsers */
    background: -webkit-linear-gradient(141deg, #4C86A8 , #AF9164); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(-135deg, #4C86A8 , #AF9164); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

</style>

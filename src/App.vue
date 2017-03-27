<template>
    <div>
        <h1>The Benab Foundation</h1>
        <router-link :to="{ name: 'HomePage' }">Home</router-link>
        <router-link :to="{ name: 'Cog2017Page' }">Cog2017</router-link>
        <router-link :to="{ name: 'ProjectsPage' }">Projects</router-link>
        <router-link :to="{ name: 'GetInvolvedPage' }">Get Involved</router-link>
        <router-link :to="{ name: 'AboutPage' }">About</router-link>
        <router-view></router-view>
        <benab-footer></benab-footer>

    </div>
</template>

<script>

import Footer from './components/Footer.vue'

export default {
    components: {
        BenabFooter: Footer
    },
    data() {
        return {
        }
    }
}

</script>

<style lang="scss">
    $primary-color: #333;
    h1 {
        color: $primary-color
    }

</style>

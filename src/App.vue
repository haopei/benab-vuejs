<template>
    <div>
        <h1>The Benab Foundation</h1>
        <router-link :to="{ name: 'HomePage' }">Home</router-link>
        <router-link :to="{ name: 'Cog2017Page' }">Cog2017</router-link>
        <router-link :to="{ name: 'ProjectsPage' }">Projects</router-link>
        <router-link :to="{ name: 'GetInvolvedPage' }">Get Involved</router-link>
        <router-link :to="{ name: 'SponsorPage' }">Sponsors</router-link>
        <router-link :to="{ name: 'VolunteerPage' }">Volunteer</router-link>
        <router-link :to="{ name: 'MembershipPage' }">Membership</router-link>
        <router-link :to="{ name: 'AboutPage' }">About</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}

</script>

<style lang="scss">

</style>

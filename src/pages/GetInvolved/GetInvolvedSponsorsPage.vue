<template lang="html">
    <div class="page page--members">
        <section class="hero is-primary is-bold is-medium">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-1">Donate</h1>
                    <h6 class="subtitle is-6">Empower us to make a difference</h6>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="has-text-centered">
                    <div class="padded-space"></div>
                </div>
                <div class="columns">
                    <div class="column">
                        <h4 class="title is-4">We care about education</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div class="column">
                        <h4 class="title is-4">We Never Stop Moving</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div class="column">
                        <h4 class="title is-4">We Empower Youths</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </section>
        <hr>
        <section class="section has-text-centered">
            <router-link :to="{ name: 'Cog2017Page' }"><a class="button is-primary is-large">Donate Now</a></router-link>

        </section>
    </div>


</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .hero--get-involved-membership {
        background: url('./static/1.jpg') center/cover;
    }
</style>

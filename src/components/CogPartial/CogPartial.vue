<template lang="html">
    <section class="section partial background--cog-hero has-text-centered is-medium">

        <div class="container">
            <img src="./cog-title-text.png" alt="">
            <br><br>
            <p class="subtitle">Leveling up students in Mathematics and English</p>
            <router-link :to="{ name: 'Cog2017Page' }"><a class="button is-primary is-large">Learn More</a></router-link>

        </div>
    </section>
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
.background--cog-hero {
    background: #4C86A8; /* fallback for old browsers */
    background: -webkit-linear-gradient(141deg, #4C86A8 , #AF9164); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(-135deg, #4C86A8 , #AF9164); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

</style>

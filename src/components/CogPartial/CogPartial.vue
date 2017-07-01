<template lang="html">
    <section class="section partial background--cog-hero has-text-centered is-large is-fluid">
        <div class="container is-fluid">
            <img src="./cog-title-text.png" alt="">
            <br><br>
            <h3 class="subtitle is-3 is-handwriting is-white-text">Annual 30-days bootcamp to level up students in Mathematics and English</h3>
            <br>
            <a href="https://form.jotformz.com/71105704463651" target="_blank" class="button is-primary is-inverted is-large">Volunteer</a>
            <router-link :to="{ name: 'Cog2017Page' }"><a class="button is-primary is-large is-outlined is-inverted">Learn More</a></router-link>
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
    background: url('./chalkboard.jpg') center/cover;
    // background: #4C86A8; /* fallback for old browsers */
    // background: -webkit-linear-gradient(141deg, #4C86A8 , #AF9164); /* Chrome 10-25, Safari 5.1-6 */
    // background: linear-gradient(-135deg, #4C86A8 , #AF9164); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

</style>

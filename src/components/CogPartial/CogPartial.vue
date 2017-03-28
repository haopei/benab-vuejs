<template lang="html">
    <section class="section partial partial--cog-hero has-text-centered is-large">
        <div class="container">
            <img src="./cog-title-text.png" alt="">
            <h2 class="subtitle">Leveling up students who are preparing for their 3rd Form Exams</h2>
            <router-link :to="{ name: 'GetInvolvedPage' }"><a class="button is-large">Get Involved</a></router-link>
        </div>
    </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.partial--cog-hero {
    background: #4C86A8; /* fallback for old browsers */
    background: -webkit-linear-gradient(141deg, #4C86A8 , #AF9164); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(-135deg, #4C86A8 , #AF9164); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>

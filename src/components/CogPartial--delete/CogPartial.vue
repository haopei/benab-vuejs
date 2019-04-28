<template lang="html">
    <section class="section partial background--cog-hero has-text-centered is-small is-fluid">
        <div class="container is-fluid">
            <img src="./cog-title-text.png" alt="">
            <br>
              <span style="font-size: 2rem;">July-August 2019</span>
            <h3 class="subtitle is-3 is-handwriting is-white-text">Annual 30-days bootcamp to level up students in Mathematics and English</h3>
            <br>
            <a href="https://form.jotformz.com/71105704463651" target="_blank" class="button is-primary is-inverted is-large">Volunteer</a>
            <router-link :to="{ name: 'Cog2017Page' }"><a class="button is-primary is-large is-outlined is-inverted">Learn More</a></router-link>
            <br>
            <div class="cog-hero__start-date">
                <div>
                    Starts July 2018
                </div>
            </div>
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
}

.cog-hero__start-date {
    color: #229953;
    font-size: 2rem;
    margin-top: 2rem;
}

</style>

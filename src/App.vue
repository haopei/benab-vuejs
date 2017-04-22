<template>
    <div>
        <benab-header></benab-header>
        <router-view></router-view>
        <benab-footer></benab-footer>
    </div>
</template>
<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
    components: {
        BenabFooter: Footer,
        BenabHeader: Header
    },
    data() {
        return {
        }
    }
}

</script>

<style lang="scss">
    $brown: #946440;
    $primary: $brown !default;
    $handwritingFont: 'Shadows Into Light';
    @import '~bulma/bulma.sass';
    @import '~bootstrap-grid/dist/grid.min.css';


    .is-handwriting {
        font-family: $handwritingFont;
    }

    .title {
        font-family: $handwritingFont;
    }

    .is-white-text {
        color: #fff;
    }

    .heading {
        text-transform: none;
    }


    .white-text-section * {
        color: #fff;
    }

    .padded-space {
        margin-bottom: 1rem;
    }

    .hide-me {
        display: none;
    }

</style>

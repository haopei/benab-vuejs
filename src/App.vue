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
    @import '~bulma/bulma.sass';

    $primary-color: #333;
    h1 {
        color: $primary-color
    }

</style>
